import React from 'react';
import './App.css';
import {Home} from "./containers/Home";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {LogInPage} from "./containers/LogInPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/" element={<LogInPage/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
