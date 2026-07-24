import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.use("/api/user", userRoutes );
app.use("/api/auth", authRoutes );