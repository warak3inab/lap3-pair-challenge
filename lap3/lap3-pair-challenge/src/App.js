import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages'
import { Header } from './layout'
import './style.css'



function App(){
    return(
        <>
        <Header />
            <Routes>
                <Route path='/' element={<Homepage />} />
            </Routes>
        </>
    )
}

export default App;
