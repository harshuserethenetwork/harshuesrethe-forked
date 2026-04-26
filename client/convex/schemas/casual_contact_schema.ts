import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export const casual_contact = defineTable({
  email: v.string(),
  fullname: v.string(),
  message: v.string(),
});
