import React, { FC, useState, useEffect } from 'react';
import AuthCard from './AuthCard';
import { IUser } from '../../../../server/src/models/user';
import { useDispatch } from 'react-redux';
import validateForm from './ValidateForm';
import MessageManager from '../Message/MessageManager';
import signUpSend from './SignUpSend';

export enum userInputs {
    userEmail = 'userEmail',
    userPassword = 'userPassword',
    userFirstName = 'userFirstName',
    userLastName = 'userLastName',
    userConfirmPassword = 'userConfirmPassword'
}

const AuthWrap: FC = () => {

    const dispatch = useDispatch();

    const blankUser: IUser = {
        userEmail: '',
        userPassword: '',
        userFirstName: '',
        userLastName: ''
    }

    const [userData, setUserData] = useState<IUser>(blankUser);
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [validationErrors, setValidationErrors] = useState<string[]>([]);
    const [serverSideErrors, setServerSideErrors] = useState<string[]>([]);

    const [isSignIn, setIsSignIn] = useState<boolean>(false);

    useEffect( () => {
        console.log('serverSideErrors:', serverSideErrors);
    }, [serverSideErrors]);

    const switchSignMode = () => {
        setIsSignIn((prevSignState) => !prevSignState);
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errorsArray: string[] = validateForm({...userData, confirmPassword}, isSignIn);
        setValidationErrors(errorsArray);
        if (errorsArray.length > 0) return;
        if (isSignIn) {

        } else {
           const feedback: string[] = await signUpSend(userData);
           setServerSideErrors(feedback);
           setIsSignIn(true);
        }
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.target.value;
        const fieldName = e.target.name;
        if (fieldName === 'userConfirmPassword') {
            setConfirmPassword(value);
        } else {
            setUserData({ ...userData, [fieldName]: value });
        }
    }

    return (
        <>
            <MessageManager messages={validationErrors} />
            <MessageManager messages={serverSideErrors} />
            <AuthCard
                handleSubmit={handleSubmit}
                handleInput={handleInput}
                userData={userData}
                confirmPassword={confirmPassword}
                isSignIn={isSignIn}
                switchSignMode={switchSignMode} />
        </>

    );
}

export default AuthWrap;
