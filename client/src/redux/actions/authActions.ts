import actionTypes from './actionTypes';
import * as api from '../../api/index';
import { AppDispatch } from '../index';
import { updateServerMessages } from './serverMessages';
import { LoginServerResponse } from '../../../../server/src/controllers/auth';

export const logIn = (userEmail: string, userPassword: string) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.logIn(userEmail, userPassword);
        const res: LoginServerResponse = data;
        const authParams = res.credentials;
        localStorage.setItem('userID', authParams!.userID);
        localStorage.setItem('UserToken', authParams!.userToken);
        dispatch({ type: actionTypes.LOG_IN, payload: { userID: authParams!.userID, userToken: authParams!.userToken } });
    } catch (err: any) {
        const res: LoginServerResponse = err.response.data;
        dispatch(updateServerMessages(res.message || []));
    }

}
