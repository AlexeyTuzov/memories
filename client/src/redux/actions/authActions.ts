import actionTypes from './actionTypes';
import * as api from '../../api/index';
import { AppDispatch } from '../index';
import { AuthInfo } from '../../../../server/src/controllers/auth';

export const LogIn = (userEmail: string, userPassword: string) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.logIn(userEmail, userPassword);
        const authParams: AuthInfo = data;
        localStorage.setItem('userID', authParams.userID);
        localStorage.setItem('UserToken', authParams.userToken);
        dispatch({ type: actionTypes.LOG_IN, payload: { userID: authParams.userID, userToken: authParams.userToken } });
    } catch (err: any) {
        console.log(err);
    }

}