import express from 'express';
const app = express();

app.use(express.json());

//routes import 

import userRoutes from './route/user.route.js';
import postRoutes from './route/post.route.js';

// routes declaration
app.use('/api/v1/users', userRoutes);
app.use("/api/v1/posts",postRoutes);
app.use("/api/v1/posts",postRoutes);

//example route :http://localhost:8000/api/v1/users/register



export default app;