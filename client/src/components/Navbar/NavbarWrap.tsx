import React, { FC } from 'react';
import Navbar from './Navbar';
import { useDispatch } from 'react-redux';
import actionTypes from '../../redux/actions/actionTypes';

const NavbarWrap: FC = () => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        dispatch({type: actionTypes.LOG_OUT});
    }

    return (
        <Navbar logoutHandler={logoutHandler}/>
    );
}

export default NavbarWrap;