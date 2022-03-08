import React, {FC} from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import {useAppSelector} from '../../redux/redux-hooks';

const Posts: FC = () => {

    const classes = useStyles();
    const posts = useAppSelector((state) => state.posts)

    return (
        <h1>
            <Post />
            <Post />
            <Post />
        </h1>
    );
}

export default Posts;
