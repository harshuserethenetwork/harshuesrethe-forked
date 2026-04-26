import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export const smart_contact = defineTable({
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
});
