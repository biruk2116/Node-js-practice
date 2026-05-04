import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRouter from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/users", userRouter);

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