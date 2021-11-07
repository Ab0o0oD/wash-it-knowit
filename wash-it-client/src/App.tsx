import React, {useEffect, useState} from 'react';
import './App.css';

import {WashingMachine, WashingMachineProgram} from "./business-types";
import {WashingMachineCard} from "./component/WashingMachineCard";
import {fetchWashingMachines, fetchWashingPrograms} from "./api/api";
import {Alert} from "@mui/material";

function App() {
    const [washingMachineList, setWashingMachineList] = useState<WashingMachine[]>([])
    const [washingMachineProgramList, setWashingMachineProgramList] = useState<WashingMachineProgram[]>([])
    const [errorMessage, setErrorMessage] = useState<String>()

    useEffect(() => {
        fetchWashingMachines.then(response => {
                setWashingMachineList(response.data)
            }
        ).catch(error => {
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
    }, [])

    console.log(errorMessage)
    return (
        <div className="App">
            {errorMessage ?
                <Alert severity="error">{errorMessage}</Alert> : ''}
            <div className="container">
                {washingMachineList.map((washingMachine, index) =>
                    <WashingMachineCard
                        key={index}
                        washingProgram={washingMachineProgramList} washingMachine={washingMachine}/>
                )}
            </div>
        </div>
    );
}

export default App;
