import React, {useEffect, useState} from "react";
import {WashingMachine, WashingMachineProgram} from "../business-types";
import {fetchWashingMachines, fetchWashingPrograms} from "../api/api";
import {Alert, CircularProgress} from "@mui/material";
import {WashingMachineCard} from "../component/WashingMachineCard";

interface HomeProps {

}

export const Home: React.FC<HomeProps> = ({}) => {
    const [washingMachineList, setWashingMachineList] = useState<WashingMachine[]>([])
    const [washingMachineProgramList, setWashingMachineProgramList] = useState<WashingMachineProgram[]>([])
    const [errorMessage, setErrorMessage] = useState<String>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

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
            {errorMessage ?
                <Alert severity="error">{errorMessage}</Alert> : ''}
            <div className="container">
                {washingMachineList.map((washingMachine, index) =>
                    <WashingMachineCard
                        key={index}
                        washingProgram={washingMachineProgramList}
                        washingMachine={washingMachine}
                    />
                )}
            </div>
        </div>
    )

}