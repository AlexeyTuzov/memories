import axios from 'axios';
import { Ipost } from '../../../server/src/models/postMessage';

const url: string = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (post: Ipost) => axios.post(url, post);
export const updatePost = (post: Ipost, _id: string) => axios.patch(url, post, {params: _id});
