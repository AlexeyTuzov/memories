import express, { Router } from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts';

const router: Router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/', updatePost);

export default router;