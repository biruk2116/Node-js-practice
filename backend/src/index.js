import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    console.log("1 - Starting server");

    await connectDB();
    console.log("2 - DB connected");

    app.listen(process.env.PORT || 8000, () => {
      console.log(`3 - Server running on port ${process.env.PORT || 8000}`);
    });

  } catch (error) {
    console.error("Startup error:", error);
    process.exit(1);
  }
};

startServer();