import * as api from "../../api";
import { IUser } from "../../../../server/src/models/user";
import { LoginServerResponse } from '../../../../server/src/controllers/auth';
import { useDispatch } from 'react-redux';
import { updateServerMessages } from '../../redux/actions/serverMessages';

interface SignUpResults {
    isRedirectToSignIn: boolean;
}

const signUpSend = async (userData: IUser): Promise<SignUpResults> => {

    const { userFirstName, userLastName, userEmail, userPassword } = userData;
    const dispatch = useDispatch();

    try {
        await api.signUp(userEmail, userPassword, userFirstName, userLastName);
        dispatch(updateServerMessages(['User successfully signed up!']));
        return {
            isRedirectToSignIn: true
        };
    } catch (err: any) {
        const res: LoginServerResponse = err.response.data;
        dispatch(updateServerMessages(res.message!));
        return {
            isRedirectToSignIn: false
        };
    }
}

export default signUpSend;
