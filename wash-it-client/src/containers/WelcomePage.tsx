import {User} from "../business-types";
import {Button} from "@mui/material";
import {useNavigate} from "react-router";
import "./welcome-page.css"
import React, {useState} from "react";
import welcomeBg from "../assets/welcome.jpg"
import {NotifyMeModal} from "../component/NotifyMeModal";

interface WelcomePageProps {

}

export const WelcomePage: React.FC<WelcomePageProps> = ({}) => {
    const user: User = JSON.parse(localStorage.getItem("user")!!)
    const navigate = useNavigate()
    const onClickMakeBooking = () => {
        navigate('/booking')
    }
    const onClickShowMyBooking = () => {
        navigate('/reservations')
    }

    const onClickLogOut = () => {
        localStorage.clear()
        navigate('/')
    }
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const onClickNotifyMe = () => {
        setIsOpen(true)
    }
    return (
        <>
            <NotifyMeModal mobilNUmber={user.mobileNumber} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div className="welcome-container" style={{backgroundImage: `url(${welcomeBg})`}}>
                <div className="box-wrapper">
                    <h1>Welcome to wash-it landuary service.</h1>
                    <h2>{`Logged in as: ${user.firstName}, ${user.lastName}`} </h2>
                    <div className="btn-group">
                        <Button size="large" variant="contained" onClick={onClickMakeBooking} color="primary">Book a
                            washing
                            machine</Button>
                        <Button size="large" variant="contained" onClick={onClickShowMyBooking} color="success">Show my
                            reservations</Button>
                        <Button size="large" variant="contained" onClick={onClickNotifyMe} color="warning">Notify me on
                            available
                            machine</Button>
                        <Button size="large" variant="contained" onClick={onClickLogOut} color="primary">Log
                            out</Button>
                    </div>
                </div>
            </div>
        </>

    )

} 