import actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';


export default (currentServerMessages: string[], action: AnyAction): string[] => {
    switch (action.type) {

        case actionTypes.SERVER_MESSAGE:
            return action.payload;

        default:
            return currentServerMessages;

    }
}
