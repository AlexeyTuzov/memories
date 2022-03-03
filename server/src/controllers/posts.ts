import express, {RequestHandler, Request, Response} from 'express';

export const getPosts = (req: Request, res: Response): void => {
    res.send('IT WORKS!');
}