import { cronJobs } from 'convex/server';
import { internal } from './_generated/api';

const crons = cronJobs();

// 2:00 AM IST is 20:30 UTC the previous day.
// Running it at 20:30 UTC every Saturday ensures it runs at 2:00 AM IST every Sunday.
crons.cron(
  'cleanup-old-rate-limits',
  '30 20 * * 6',
  internal.apis.internal.cleanup.cleanupRateLimits
);

export default crons;
