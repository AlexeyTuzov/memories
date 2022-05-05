import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAllPosts } from '../../redux/actions/posts';
import { useAppSelector } from '../../redux/redux-hooks';
import { AuthorizedUser } from '../../redux/reducers/auth';
import actionTypes from '../../redux/actions/actionTypes';
import Main from './Main';
import AuthWrap from '../AuthCard/AuthWrap';

const MainWrap: FC = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth: AuthorizedUser = useAppSelector(state => state.auth);

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    useEffect(() => {
        let userID: string | null = localStorage.getItem('userID');
        let userToken: string | null = localStorage.getItem('userToken');
        if (userID && userToken) {
            dispatch({ type: actionTypes.LOG_IN, payload: { userID, userToken } });
        }
    }, []);

    if (auth.isAuthenticated) {
        navigate('/');
    } else {
        navigate('/auth');
    }

    return (
        auth.isAuthenticated ? <Main /> : <AuthWrap />
    );
}

export default MainWrap;