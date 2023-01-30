import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import {Portfolio} from "./features/Portfolio/Portfolio";
import {Login} from "./features/Login/Login";
import {Test} from "./features/Test";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Portfolio/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/test'} element={<Test/>}/>
                <Route path={'*'} element={<Navigate to={'/login'}/>}/>
            </Routes>
        </div>
    );
}

export default App;
