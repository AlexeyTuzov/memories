import { Request, Response } from 'express';
import User from '../models/user';
import { IUser } from '../models/user';
import { ValidationError, validationResult, Result } from 'express-validator';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import errorMessageGenerator from '../utilites/errorMessageGenerator';

export interface AuthInfo {
    userID: string;
    userToken: string;
}

export const logIn = async (req: Request, res: Response): Promise<void> => {
    const { userEmail, userPassword } = req.body;

    try {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            const errorText: string[] = errorMessageGenerator(errors.array({ onlyFirstError: false }));
            res.status(400).json({ message: errorText });
            return;
        }

        const foundUser: IUser | null = await User.findOne({ userEmail });
        if (!foundUser) {
            res.status(400).json({ message: 'User with this Email is not registered yet!' });
            return;
        }

        const passwordMatch: boolean = await compare(userPassword, foundUser.userPassword);
        if (!passwordMatch) {
            res.status(400).json({ message: 'Wrong password!' });
            return;
        }

        const token = jwt.sign(
            { userID: foundUser._id },
            config.get('jwtKey'),
            { expiresIn: '1d' }
        );

        res.json({ userID: foundUser._id, userToken: token });

    } catch (err: any) {
        res.status(500).json({ message: `Server error: ${err}` });
    }
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { userEmail, userPassword, userFirstName, userLastName } = req.body;

    try {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsArray: string[] = errorMessageGenerator(errors.array({ onlyFirstError: false }));
            res.status(400).json(errorsArray);
            return;
        }

        const foundUser: IUser | null = await User.findOne<IUser>({ userEmail });
        if (foundUser) {
            res.status(400).json(['User with this Email is already registered!']);
            return;
        }
        const encryptedPassword = await hash(userPassword, 10);
        const newUser = new User({ userEmail, userPassword: encryptedPassword, userFirstName, userLastName });
        await newUser.save();

        res.status(201).json(['User successfully created!']);
    } catch (err: any) {
        res.status(500).json([`Server error: ${err}`]);
    }
}
