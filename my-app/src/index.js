import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Home, Footer, Tictactoe} from "./components";
import './general.scss'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path='' element={<Home />} />
            <Route path='/tictactoe' element={<Tictactoe />} />
        </Routes>
        <Footer />
    </BrowserRouter>
);