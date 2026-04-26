import { mutation } from '../../_generated/server';
import { v } from 'convex/values';

export const createCasualContact = mutation({
  args: {
    email: v.string(),
    fullname: v.string(),
    message: v.string(),
    read_at: v.optional(v.union(v.string(), v.null())),
    tag: v.optional(v.string()),
  },

  handler: async (ctx, args) => {
    const recordId = await ctx.db.insert('casual_contact', args);
    return recordId;
  },
});
