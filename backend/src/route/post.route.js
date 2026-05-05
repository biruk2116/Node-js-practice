import { Router } from 'express';

import {createPost} from '../controllers/post.controller.js';

import {getPosts} from '../controllers/post.controller.js';
const router = Router();

router.post('/create', createPost);
router.get('/get', getPosts);

export default router;  
