import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home  from './pages/home';
import Films  from './pages/Films';
import Series  from './pages/Series';

export const App = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path = '/' element = {<Home/>}></Route>
            <Route path = '/Films' element = {<Films/>}></Route>
            <Route path = '/Series' element = {<Series/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}