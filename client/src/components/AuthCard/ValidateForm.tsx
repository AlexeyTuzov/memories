import { IUser } from '../../../../server/src/models/user';

interface IAuthForm extends IUser {
    confirmPassword: string;
}

const validateForm = (form: IAuthForm, isSignIn: boolean): string[] => {
    let errorsArray: string[] = [];

    if (!form.userFirstName && !isSignIn) errorsArray.push('No user First Name is specified!');
    if (!form.userEmail) errorsArray.push('No Email is specified!');
    if (!form.userPassword) errorsArray.push('No password is specified!');
    if (!(form.userPassword === form.confirmPassword) && !isSignIn) errorsArray.push('Password confirmation mismatch!');

    return errorsArray;
}

export default validateForm;
