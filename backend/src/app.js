import express from "express";
import userRoutes from "./route/user.route.js";
import postRoutes from "./route/post.route.js";

const app = express();

app.use(express.json());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

export default app;