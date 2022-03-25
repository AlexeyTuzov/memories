import { Ipost } from '../../../../server/src/models/postMessage';
import actionTypes from '../actions/actionTypes';
import { AnyAction } from 'redux';

export default (posts: Ipost[] = [], action: AnyAction): Ipost[] => {
    switch (action.type) {

        case actionTypes.FETCH_ALL_POSTS:
            return action.payload;

        case actionTypes.CREATE_POST:
            const newPost: Ipost = action.payload;
            return [...posts, newPost];

        case actionTypes.UPDATE_POST:
            const updatedPost: Ipost = action.payload;
            return posts.map( post => post._id === action.payload._id ? action.payload : post);

        default:
            return posts;
    }
}
