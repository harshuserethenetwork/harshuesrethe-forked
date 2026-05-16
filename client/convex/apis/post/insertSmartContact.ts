import { mutation } from '../../_generated/server';
import { ConvexError, v } from 'convex/values';

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

function formatRemainingMinutes(remainingMs: number) {
  const mins = Math.ceil(remainingMs / (60 * 1000));
  return Math.max(1, Math.min(15, mins));
}

export const createSmartContact = mutation({
  args: {
    attachments: v.array(
      v.object({
        file_name: v.string(),
        file_type: v.string(),
        file_url: v.string(),
      })
    ),

    budget: v.string(),

    client_info: v.object({
      email: v.string(),
      fullname: v.string(),
      prj_description: v.string(),
      prj_title: v.string(),
    }),

    prj_category: v.string(),
    prj_type: v.string(),
    status: v.string(),
    timeline: v.string(),
    read_at: v.optional(v.union(v.string(), v.null())),
    tag: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    // Identity key for rate limiting: use client email.
    const identity = args.client_info.email.toLowerCase().trim();

    const now = Date.now();

    const latest = await ctx.db
      .query('smart_contact_rate_limit')
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

    await ctx.db.insert('smart_contact_rate_limit', {
      identity,
      last_submitted_at: now,
      created_at: now,
      updated_at: now,
    });

    const recordId = await ctx.db.insert('smart_contact', args);
    return recordId;
  },
});
