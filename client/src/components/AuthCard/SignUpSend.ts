import * as api from "../../api";
import { IUser } from "../../../../server/src/models/user";
import { LoginServerResponse } from '../../../../server/src/controllers/auth';

interface SignUpResults {
    isRedirectToSignIn: boolean;
    serverMessage: string[];
}

const SignUpSend = async (userData: IUser): Promise<SignUpResults> => {

    const { userFirstName, userLastName, userEmail, userPassword } = userData;

    try {
        await api.signUp(userEmail, userPassword, userFirstName, userLastName);
        return {
            isRedirectToSignIn: true,
            serverMessage: ['User successfully signeg up!']
        };
    } catch (err: any) {
        const res: LoginServerResponse = err.response.data;
        return {
            isRedirectToSignIn: false,
            serverMessage: [...res.message!]
        };
    }
}

export default SignUpSend;
