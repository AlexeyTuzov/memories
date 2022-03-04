import React, {FC} from 'react';
import Post from './Post/Post';

const Posts: FC = () => {
    return (
        <h1>
            <Post />
            <Post />
            <Post />
        </h1>
    );
}

export default Posts;