import app from "./app.js";
import env from "./config/env.js";

app.get("/", (req, res) => {
  const uptimeSeconds = process.uptime();

  res.status(200).json({
    status: "healthy",
    service: "portfolio-api",
    uptime: `${Math.floor(uptimeSeconds)} seconds`,
    timestamp: new Date().toISOString(),
    memory: {
      rss: `${Math.round(process.memoryUsage().rss / 1024 / 1024)} MB`,
      heapUsed: `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB`,
      heapTotal: `${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} MB`,
    },
    nodeVersion: process.version,
  });
});

app.listen(env.port, () => {
  console.log(`🚀 Server running on port ${env.port}`);
});
