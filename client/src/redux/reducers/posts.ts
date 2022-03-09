import { Ipost } from '../../../../server/src/models/postMessage';
import actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';

export default (posts: Ipost[] = [], action: AnyAction) => {
    switch (action.type) {

        case actionTypes.FETCH_ALL_POSTS:
            return posts;

        case actionTypes.CREATE_POST:
            const newPost: Ipost = action.payload;
            return [...posts, newPost];

        default:
            return posts;
    }
}
