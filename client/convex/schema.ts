import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';
import { casual_contact } from './schemas/casual_contact_schema';
import { smart_contact } from './schemas/smart_contact_schema';

export default defineSchema({
  casual_contact,
  smart_contact,
});
