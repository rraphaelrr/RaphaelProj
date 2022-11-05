import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from "../page/home/home";


export default function Routing() {
    return (
        <BrowserRouter>
            <Routes>


                <Route path='/' element={<Home />} />


            </Routes>
        </BrowserRouter>
    )
}

