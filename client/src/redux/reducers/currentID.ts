import { AnyAction } from 'redux';
import actionTypes from '../actions/actionTypes';

export default (currentID: string = '', action: AnyAction): string => {
    switch (action.type) {

        case actionTypes.UPDATE_CURRENT_ID:
            return action.payload;

        default:
            return currentID;
    }
}