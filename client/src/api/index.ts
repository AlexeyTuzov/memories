import axios from 'axios';
import { Ipost } from '../../../server/src/models/postMessage';

const url: string = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (post: Ipost) => axios.post(url, post);
export const updatePost = (post: Ipost) => axios.patch(url, post);
export const deletePost = (_id: string) => axios.delete(url, { data: {_id}});
export const likePost = (post: Ipost) => axios.patch(`${url}/likePost`, post);

export const logIn = (userEmail: string, userPassword: string) => axios.post(`${url}/login`, { data: {userEmail, userPassword}});
export const signUp = (userEmail: string, userPassword: string) => axios.post(`${url}/signup`, { data: {userEmail, userPassword}});

