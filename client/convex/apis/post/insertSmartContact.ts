import { mutation } from '../../_generated/server';
import { v } from 'convex/values';

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
  },

  handler: async (ctx, args) => {
    const recordId = await ctx.db.insert('smart_contact', args);
    return recordId;
  },
});
