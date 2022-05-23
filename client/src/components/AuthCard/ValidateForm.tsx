import React from "react";
import { IUser } from '../../../../server/src/models/user';

interface IAuthForm extends IUser {
    confirmPassword: string;
}

const validateForm = (form: IAuthForm, isSignIn: boolean): boolean => {
    let errorMessage: string = '';

    if (!(form.userPassword === form.confirmPassword) && !isSignIn) errorMessage = 'Password confirmation mismatch!';
    if (!form.userPassword) errorMessage = 'No password is specified!';
    if (!form.userEmail) errorMessage = 'No Email is specified!';
    if (!form.userFirstName && !isSignIn) errorMessage = 'No user First Name is specified!';

    // instead a console.log here will be the call of error popup
    if (errorMessage) console.log(errorMessage);
    return !errorMessage;
}

export default validateForm;