import React, { FC, useEffect, useState } from 'react';
import App from './App';
import { useDispatch } from 'react-redux';
import { getAllPosts } from './redux/actions/posts';
import AuthCard from './components/AuthCard/AuthCard';
import { useAppSelector } from './redux/redux-hooks';
import { AuthorizedUser } from './redux/reducers/auth';
import actionTypes from './redux/actions/actionTypes';

const AppWrap: FC = () => {

    const dispatch = useDispatch();
    const auth: AuthorizedUser = useAppSelector(state => state.auth);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    useEffect(() => {
        let userID: string | null = localStorage.getItem('userID');
        let userToken: string | null = localStorage.getItem('userToken');
        if (userID && userToken) {
            dispatch({ type: actionTypes.LOG_IN, payload: { userID, userToken } })
        }
    }, []);

    return (
        auth.isAuthenticated ? <App /> : <AuthCard />
    );
}

export default AppWrap;
