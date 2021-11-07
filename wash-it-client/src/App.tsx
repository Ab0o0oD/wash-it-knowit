import React from 'react';
import './App.css';
import {Booking} from "./containers/Booking";
import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import {LogInPage} from "./containers/LogInPage";
import {WelcomePage} from "./containers/WelcomePage";
import {ReservationsOverview} from "./containers/ReservationsOverview";
import {SignUpPage} from "./containers/SignUpPage";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LogInPage/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/welcome" element={<WelcomePage/>}/>
                    <Route path="/booking" element={<Booking/>}/>
                    <Route path="/reservations" element={<ReservationsOverview/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
