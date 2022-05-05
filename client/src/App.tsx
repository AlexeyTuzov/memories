import React, { FC } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/MainWrap';
import AuthWrap from './components/AuthCard/AuthWrap';


const App: FC = () => {

    return (
        <>
        <Navbar />
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/auth' element={<AuthWrap />}/>
        </Routes>
        </>
    );
}

export default App;
