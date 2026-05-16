import { defineTable } from 'convex/server';
import { v } from 'convex/values';

export const smart_contact_rate_limit = defineTable({
    identity: v.string(),
    last_submitted_at: v.number(),
    created_at: v.number(),
    updated_at: v.number(),
}).index('by_identity', ['identity']);
