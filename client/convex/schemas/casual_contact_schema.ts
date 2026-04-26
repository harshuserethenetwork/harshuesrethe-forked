import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export const casual_contact = defineTable({
  email: v.string(),
  fullname: v.string(),
  message: v.string(),
  read_at: v.optional(v.union(v.string(), v.null())),
  tag: v.optional(v.string()),
});
