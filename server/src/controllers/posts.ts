import { Request, Response } from 'express';
import mongoose, { ObjectId } from 'mongoose';
import PostMessage from '../models/postMessage';
import { Ipost } from '../models/postMessage';

export const getPosts = async (req: Request, res: Response): Promise<void> => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPost = async (req: Request, res: Response): Promise<void> => {
    const post: Ipost = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
}

export const updatePost = async (req: Request, res: Response): Promise<void> => {
    const post: Ipost = req.body;

    if (!mongoose.isValidObjectId(post._id)) {
        res.status(404).json({ message: 'invalid post ID!' });
        return;
    }

    try {
        const updatedPost: Ipost = await PostMessage.findByIdAndUpdate(
            post._id, post, { new: true });
        res.json(updatedPost);
    } catch (err: any) {
        res.status(400).json({ message: `Cannot update post!', ${err.message}` });
    }

}