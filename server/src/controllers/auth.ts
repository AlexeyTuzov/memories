import { Request, Response } from 'express';
import User from '../models/user';
import { IUser } from '../models/user';
import { body, ValidationError, validationResult, Result } from 'express-validator';
import { compare } from 'bcrypt';

export interface AuthInfo {
    userID: string;
    userToken: string;
}

export const logIn = async (req: Request, res: Response): Promise<void> => {
    const { userEmail, userPassword } = req.body;

    try {
        body('userEmail').isEmail().normalizeEmail();
        body('userPasword').isLength({ min: 6 });
        const errors: Result<ValidationError> = validationResult(req);
        if (!errors.isEmpty()) {
            res.status(400).json({ massage: `Invalid login data: ${errors}` });
            return;
        }

        const foundUser: IUser = await User.findOne({ userEmail });
        if (!foundUser) {
            res.status(400).json({ message: 'User with this Email is not registered yet!' });
            return;
        }

        const passwordMatch: boolean = await compare(userPassword, foundUser.userPassword);
        if (!passwordMatch) {
            res.status(400).json({ massage: 'Password mismatch!' });
            return;
        }

    } catch (err: any) {
        res.status(500).json({ message: `Server error: ${err}` });
    }


}

export const signUp = async (req: Request, res: Response): Promise<void> => {

}