import { query } from '../../_generated/server';
import { paginationOptsValidator } from 'convex/server';

export const get = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query('smart_contact')
      .order('desc')
      .paginate(args.paginationOpts);
  },
});
