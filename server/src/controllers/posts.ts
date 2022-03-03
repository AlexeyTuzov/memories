import { Request, Response } from 'express';
import PostMessage from '../models/postMessage';

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPost = async (req: Request, res: Response): Promise<void> => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}