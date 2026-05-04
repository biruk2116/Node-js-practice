import express from 'express';
const app = express();



//routes import 

import userRoutes from './route/user.route.js';

// routes declaration
app.use('/api/v1/users', userRoutes);
app.use("/api/v1/posts",postRoutes);

//example route :http://localhost:8000/api/v1/users/register



export default app;