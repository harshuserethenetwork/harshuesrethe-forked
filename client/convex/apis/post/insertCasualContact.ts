import { mutation } from '../../_generated/server';
import { ConvexError, v } from 'convex/values';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function formatRemainingMinutes(remainingMs: number) {
  const mins = Math.ceil(remainingMs / (60 * 1000));
  return Math.max(1, Math.min(15, mins));
}

export const createCasualContact = mutation({
  args: {
    email: v.string(),
    fullname: v.string(),
    message: v.string(),
    read_at: v.optional(v.union(v.string(), v.null())),
    tag: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    // Identity key for rate limiting:
    // - email is guaranteed from args
    // - ip is not available in Convex from the client in this codebase,
    //   so we store per-email only.
    const identity = args.email.toLowerCase().trim();

    const now = Date.now();

    // If there is an existing limiter doc, check time difference.
    const latest = await ctx.db
      .query('casual_contact_rate_limit')
      .withIndex('by_identity', (q) => q.eq('identity', identity))
      .order('desc')
      .first();

    if (latest) {
      const elapsed = now - latest.last_submitted_at;
      if (elapsed < RATE_LIMIT_WINDOW_MS) {
        const remainingMs = RATE_LIMIT_WINDOW_MS - elapsed;
        const remainingMinutes = formatRemainingMinutes(remainingMs);
        throw new ConvexError({
          code: 'RATE_LIMIT',
          title: 'Too many requests',
          message: 'you are submitting message too frequently',
          retryAfter: remainingMinutes,
        });
      }
    }

    // Upsert limiter: since we don't have an index on identity for updates,
    // create a new doc to keep things simple and avoid race issues.
    // Latest doc will be picked up on the next call.
    await ctx.db.insert('casual_contact_rate_limit', {
      identity,
      last_submitted_at: now,
      created_at: now,
      updated_at: now,
    });

    const recordId = await ctx.db.insert('casual_contact', args);
    return recordId;
  },
});
