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
    await connectDB();

    app.listen(process.env.PORT || 8000, () => {
      console.log("Server running");
    });

  } catch (error) {
    console.error(error);
  }
};

startServer();