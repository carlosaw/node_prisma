import { Router } from 'express';

import * as PostController from '../controllers/postController';
import * as UserController from '../controllers/userController';

const router = Router();
// Read
router.get('/posts', PostController.all);
router.get('/users', UserController.all);
router.get('/post/:id', PostController.one);
// Create
router.post('/post', PostController.create);
router.post('/user', UserController.create);
// Put
router.put('/post/:id', PostController.togglePost);
// Delete
router.delete('/post/:id', PostController.deletePost);

export default router;