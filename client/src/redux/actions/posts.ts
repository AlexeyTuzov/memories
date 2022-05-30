import * as api from '../../api/index';
import { Ipost } from '../../../../server/src/models/postMessage';
import actionTypes from './actionTypes';
import { AppDispatch } from '../index';
import { updateServerMessages } from './serverMessages';

export const getAllPosts = () => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const posts: Ipost[] = data;
        dispatch({ type: actionTypes.FETCH_ALL_POSTS, payload: posts });
    } catch (err: any) {
        const res: string = err.message;
        dispatch(updateServerMessages([res]));
    }
}

export const createNewPost = (post: Ipost) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.createPost(post);
        const newPost: Ipost = data;
        dispatch({ type: actionTypes.CREATE_POST, payload: newPost });
    } catch (err: any) {
        const res: string = err.message;
        dispatch(updateServerMessages([res]));
    }
}

export const updatePost = (post: Ipost) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.updatePost(post);
        const updatedPost: Ipost = data;
        dispatch({ type: actionTypes.UPDATE_POST, payload: updatedPost });
    } catch (err: any) {
        const res: string = err.message;
        dispatch(updateServerMessages([res]));
    }
}

export const deletePost = (_id: string) => async (dispatch: AppDispatch) => {
    try {
        await api.deletePost(_id);
        dispatch({ type: actionTypes.DELETE_POST, payload: _id });
    } catch (err: any) {
        const res: string = err.message;
        dispatch(updateServerMessages([res]));
    }
}

export const likePost = (post: Ipost) => async (dispatch: AppDispatch) => {
    try {
        const { data } = await api.likePost(post);
        const updatedPost: Ipost = data;
        dispatch({ type: actionTypes.UPDATE_POST, payload: updatedPost });
    } catch (err: any) {
        const res: string = err.message;
        dispatch(updateServerMessages([res]));
    }
}
