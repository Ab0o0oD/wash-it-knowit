import React, {useEffect, useState} from "react";
import {User, WashingMachine, WashingMachineProgram} from "../business-types";
import {fetchWashingMachines, fetchWashingPrograms} from "../api/api";
import {Alert, Button, CircularProgress} from "@mui/material";
import {WashingMachineCard} from "../component/WashingMachineCard";
import "./booking.css"
import {useNavigate} from "react-router";

interface BookingProps {
}

export const Booking: React.FC<BookingProps> = ({}) => {
    const [washingMachineList, setWashingMachineList] = useState<WashingMachine[]>([])
    const [washingMachineProgramList, setWashingMachineProgramList] = useState<WashingMachineProgram[]>([])
    const [errorMessage, setErrorMessage] = useState<String>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const navigate = useNavigate()
    const user: User = JSON.parse(localStorage.getItem("user")!!)
    useEffect(() => {
        setIsLoading(true)
        fetchWashingMachines.then(response => {
                setIsLoading(false)
                setWashingMachineList(response.data)
            }
        ).catch((error) => {
            setErrorMessage("Couldn't load washing machines")
            setWashingMachineList([])
        })

        fetchWashingPrograms.then(response => {
            setWashingMachineProgramList(response.data)
        })
            .catch(error => {
                setWashingMachineProgramList([])
                setErrorMessage("Couldn't load washing programs")
            })
    }, [washingMachineList])
    if (isLoading) {
        return <CircularProgress style={{position: "fixed", left: "49%", top: "40%"}} size={80}/>
    }


    return (
        <div>
            <div className="home-header">
                <h1>{`Logged in as: ${user.firstName}, ${user.lastName}`}</h1>
                {errorMessage ?
                    <Alert severity="error">{errorMessage}</Alert> : ''}
            </div>
            <Button size="large" variant="contained" onClick={() => {
                navigate('/welcome')
            }}>Back to main</Button>
            <div className="cards-container">
                {washingMachineList.map((washingMachine, index) =>
                    <WashingMachineCard
                        key={index}
                        washingProgram={washingMachineProgramList}
                        washingMachine={washingMachine}
                        user={user}
                    />
                )}
            </div>
        </div>
    )

}