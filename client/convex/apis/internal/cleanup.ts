import { internalMutation } from '../../_generated/server';

const SEVEN_DAYS_IN_MS = 7 * 24 * 60 * 60 * 1000;

export const cleanupRateLimits = internalMutation({
  handler: async (ctx) => {
    const now = Date.now();
    const cutoffTime = now - SEVEN_DAYS_IN_MS;

    // Fetch and delete old casual contact rate limits
    const oldCasualRateLimits = await ctx.db
      .query('casual_contact_rate_limit')
      .withIndex('by_created_at', (q) => q.lt('created_at', cutoffTime))
      .collect();

    for (const doc of oldCasualRateLimits) {
      await ctx.db.delete(doc._id);
    }

    // Fetch and delete old smart contact rate limits
    const oldSmartRateLimits = await ctx.db
      .query('smart_contact_rate_limit')
      .withIndex('by_created_at', (q) => q.lt('created_at', cutoffTime))
      .collect();

    for (const doc of oldSmartRateLimits) {
      await ctx.db.delete(doc._id);
    }
  },
});
