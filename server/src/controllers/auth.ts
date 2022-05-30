import { Request, Response } from 'express';
import User from '../models/user';
import { IUser } from '../models/user';
import { ValidationError, validationResult, Result } from 'express-validator';
import { compare, hash } from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import serverMessageGenerator from '../utilites/serverMessageGenerator';

export interface AuthInfo {
    userID: string;
    userToken: string;
}

export interface LoginServerResponse {
    message?: string[];
    credentials?: AuthInfo;
}
const authResponse: LoginServerResponse = {};

export const logIn = async (req: Request, res: Response): Promise<void> => {
    const { userEmail, userPassword } = req.body;

    try {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            const errorText: string[] = serverMessageGenerator(errors.array({ onlyFirstError: false }));
            res.status(400).json(authResponse.message = errorText);
            return;
        }

        const foundUser: IUser | null = await User.findOne({ userEmail });
        if (!foundUser) {
            res.status(400).json(authResponse.message = ['User with this Email is not registered yet!']);
            return;
        }

        const passwordMatch: boolean = await compare(userPassword, foundUser.userPassword);
        if (!passwordMatch) {
            res.status(400).json(authResponse.message = ['Wrong password!']);
            return;
        }

        const token = jwt.sign(
            { userID: foundUser._id },
            config.get('jwtKey'),
            { expiresIn: '1d' }
        );

        res.json(authResponse.credentials = { userID: foundUser._id, userToken: token });

    } catch (err: any) {
        res.status(500).json(authResponse.message = [`Server error: ${err}`]);
    }
}

export const signUp = async (req: Request, res: Response): Promise<void> => {
    const { userEmail, userPassword, userFirstName, userLastName } = req.body;

    try {
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            const errorsArray: string[] = serverMessageGenerator(errors.array({ onlyFirstError: false }));
            res.status(400).json(authResponse.message = errorsArray);
            return;
        }

        const foundUser: IUser | null = await User.findOne<IUser>({ userEmail });
        if (foundUser) {
            res.status(400).json(authResponse.message = ['User with this Email is already registered!']);
            return;
        }
        const encryptedPassword = await hash(userPassword, 10);
        const newUser = new User({ userEmail, userPassword: encryptedPassword, userFirstName, userLastName });
        await newUser.save();

        res.status(201).json(authResponse.message = ['User successfully created!']);
    } catch (err: any) {
        res.status(500).json(authResponse.message = [`Server error: ${err}`]);
    }
}
