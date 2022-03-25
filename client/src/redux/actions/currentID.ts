import actionTypes from "./actionTypes";

export const updateCurrentID = (ID: string) => {
    return ({ type: actionTypes.UPDATE_CURRENT_ID, payload: ID });
}