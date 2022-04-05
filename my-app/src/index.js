import React from "react";
import {Container} from "react-bootstrap";
import {createRoot} from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header, Home, Footer, Tictactoe} from "./components";
import './general.scss';


createRoot(document.getElementById('root')).render(
    <div>
        <Header />
        <BrowserRouter>
            <Container> 
                <Routes>
                    <Route path='' element={<Home />} />
                    <Route path='/tictactoe' element={<Tictactoe />} />
                </Routes>
            </Container>
        </BrowserRouter>
        <Footer />
    </div>
);