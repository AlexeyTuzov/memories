import express, { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost } from '../controllers/posts';

const router: Router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/', updatePost);
router.delete('/', deletePost);

export default router;