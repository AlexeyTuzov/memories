import actionTypes from './actionTypes';

export const updateServerMessages = (messages: string[]) => {
    return({type: actionTypes.SERVER_MESSAGE, payload: messages});
}
