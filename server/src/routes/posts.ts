import express, { Router } from 'express';
import { getPosts } from '../controllers/posts';

const router: Router = express.Router();

router.get('/', getPosts);

export default router;