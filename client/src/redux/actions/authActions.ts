import actionTypes from './actionTypes';
import * as api from '../../api/index';
import { AppDispatch } from '../index';
import { updateServerMessages } from './serverMessages';

export const logIn = (userEmail: string, userPassword: string) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.logIn(userEmail, userPassword);
        localStorage.setItem('userID', data.userID);
        localStorage.setItem('userToken', data.userToken);
        dispatch({ type: actionTypes.LOG_IN, payload: { userID: data.userID, userToken: data.userToken } });
    } catch (err: any) {
        const res: string[] = err.response.data;
        dispatch(updateServerMessages(res || []));
    }

}
