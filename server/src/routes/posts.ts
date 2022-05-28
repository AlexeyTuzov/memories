import express, { Router } from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts';
import { logIn, signUp } from '../controllers/auth';
import { body } from 'express-validator';

const router: Router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/', updatePost);
router.delete('/', deletePost);
router.patch('/likePost', likePost);
router.post('/login', logIn);
router.post('/signup',
    body('userEmail').isEmail().normalizeEmail(),
    body('userPassword').isLength({ min: 6 }),
    signUp);

export default router;
