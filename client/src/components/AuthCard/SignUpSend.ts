import * as api from "../../api";
import { IUser } from "../../../../server/src/models/user";

interface SignUpResults {
    serverMessages: string[];
    isRedirectToSignIn: boolean;
}

const signUpSend = async (userData: IUser): Promise<SignUpResults> => {

    const { userFirstName, userLastName, userEmail, userPassword } = userData;

    try {
        await api.signUp(userEmail, userPassword, userFirstName, userLastName);
        return {
            serverMessages: ['User successfuly signed up!'],
            isRedirectToSignIn: true
        };
    } catch (err: any) {

        return {
            serverMessages: [...err.response.data],
            isRedirectToSignIn: false
        };
    }
}

export default signUpSend;
