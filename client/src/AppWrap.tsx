import React, { FC, useEffect } from 'react';
import App from './App';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './redux/actions/posts';

const AppWrap: FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
        <App />
    );
}

export default AppWrap;
