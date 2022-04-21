import React, { FC, useEffect, useState } from 'react';
import App from './App';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './redux/actions/posts';
import AuthCard from './components/AuthCard/AuthCard';

const AppWrap: FC = () => {

    const dispatch = useDispatch();

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    return (
       isAuthenticated ? <App /> : <AuthCard />
    );
}

export default AppWrap;
