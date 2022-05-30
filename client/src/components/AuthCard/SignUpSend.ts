import * as api from "../../api";
import { IUser } from "../../../../server/src/models/user";

const signUpSend = async (userData: IUser): Promise<string[]> => {

    const { userFirstName, userLastName, userEmail, userPassword } = userData;

    try {
        await api.signUp(userEmail, userPassword, userFirstName, userLastName);
        return ['User successfuly signed up!'];
    } catch (err: any) {
        console.log(err.response.data);
        return [...err.response.data];
    }
}

export default signUpSend;
