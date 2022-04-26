import { Schema, model } from 'mongoose';

export interface IUser {
    _id?: any;
    userEmail: string;
    userPassword: string;
}

const userSchema = new Schema<IUser>( {
    userEmail: String,
    userPassword: String
});

const User = model('User', userSchema);

export default User;