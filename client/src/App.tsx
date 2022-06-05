import React, { FC } from 'react';
import NavbarWrap from './components/Navbar/NavbarWrap';
import { Routes, Route, Navigate } from 'react-router-dom'
import Main from './components/Main/MainWrap';
import AuthWrap from './components/AuthCard/AuthWrap';


const App: FC = () => {

    return (
        <>
            <NavbarWrap />
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/auth' element={<AuthWrap/>}/>
                <Route path='*' element={<Navigate to={'/'}/>}/>
            </Routes>
        </>
    );
}

export default App;
