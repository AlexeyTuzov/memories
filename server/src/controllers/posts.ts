import { Request, Response } from 'express';
import mongoose from 'mongoose';
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

export const deletePost = async (req: Request, res: Response): Promise<void> => {
    const _id: any = req.body._id;

    if (!mongoose.isValidObjectId(_id)) {
        res.status(404).json({ message: 'invalid post ID!' });
        return;
    }

    try {
        await PostMessage.findByIdAndRemove(_id);
        res.status(200).json({ message: 'Post successfully deleted!' });
    } catch (err: any) {
        res.status(400).json({ message: `Cannot delete post!, ${err.message}` });
    }
}

export const likePost = async (req: Request, res: Response): Promise<void> => {
    const post: Ipost = req.body;

    if (!mongoose.isValidObjectId(post._id)) {
        res.status(404).json({ message: 'invalid post ID!' });
        return;
    }

    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(
            post._id, { ...post, likeCount: post.likeCount + 1 }, { new: true });
        res.json(updatedPost);
    } catch (err: any) {
        res.status(400).json({ message: `Cannot update likes count!, ${err.message}` });
    }
}