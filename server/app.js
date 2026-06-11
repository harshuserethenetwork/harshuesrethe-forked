import "dotenv/config";
import express from "express";
import notificationRoutes from "./routes/notification.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use("/api/notifications", notificationRoutes);
app.use(errorHandler);

export default app;