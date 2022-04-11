import express, { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts';

const router: Router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/', updatePost);
router.delete('/', deletePost);
router.patch('/likePost', likePost);

export default router;