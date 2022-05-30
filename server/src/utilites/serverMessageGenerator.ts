import { ValidationError } from 'express-validator';

enum ErrorCases {
    'userEmail' = 'User Email',
    'userPassword' = 'User Password'
}
/* f.e.
    value: 'user input',
    msg: 'Invalid value',
    param: 'userPassword',
    location: 'body'
 */

const serverMessageGenerator = (errors: ValidationError[]): string[] => {
    return errors.map(error => `${error.msg} of ${ErrorCases[error.param as keyof typeof ErrorCases]}`);
}

export default serverMessageGenerator;
