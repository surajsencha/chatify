import express from "express";
import env from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
env.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
