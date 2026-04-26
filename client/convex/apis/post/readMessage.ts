import { mutation } from "../../_generated/server";
import { v } from "convex/values";

export const markAsRead = mutation({
    args: {
        id: v.id("smart_contact"),
    },
    handler: async (ctx, args) => {
        const doc = await ctx.db.get(args.id);

        if (!doc) {
            throw new Error("Document not found");
        }

        // ✅ Only update if read_at is null or undefined
        if (doc.read_at == null) {
            const now = new Date().toISOString();

            await ctx.db.patch(args.id, {
                read_at: now,
            });

            return { updated: true };
        }

        return { updated: false };
    },
});