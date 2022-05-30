import { AnyAction } from "redux";
import { AuthInfo } from "../../../../server/src/controllers/auth";
import actionTypes from '../actions/actionTypes';

export interface AuthorizedUser extends AuthInfo {
    isAuthenticated: boolean;
}

interface AuthAction extends AnyAction {
    payload: {
        userID: string;
        userToken: string;
    }
}

const defaultState: AuthorizedUser = {
    userID: '',
    userToken: '',
    isAuthenticated: false
}

export default (auth: AuthorizedUser = defaultState, action: AuthAction): AuthorizedUser => {
    switch (action.type) {
        case actionTypes.LOG_IN:
            auth.userID = action.payload.userID;
            auth.userToken = action.payload.userToken;
            auth.isAuthenticated = true;
            return auth;
        case actionTypes.LOG_OUT:
            return defaultState;
        default:
            return auth;
    }
}
