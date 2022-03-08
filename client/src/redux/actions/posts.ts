import * as api from '../../api';
import {Ipost} from '../../../../server/src/models/postMessage';
import actionTypes from './actionTypes';
import {AppDispatch} from '../index';

export const getAllPosts = () => async (dispatch: AppDispatch) => {
    try {
        const {data} = await api.fetchPosts();
        const posts: Ipost[] = data;
        dispatch( {type: actionTypes.FETCH_ALL_POSTS, payload: posts});
    } catch (err: any) {
        console.log(err.message);
    }
}
