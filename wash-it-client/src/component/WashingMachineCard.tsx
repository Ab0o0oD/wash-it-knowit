import React from "react";
import './washing-machine-card.css';
import headerImage from '../assets/washing-machine.png'
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {WashingMachine, WashingMachineProgram} from "../business-types";
import axios from "axios";

interface WashingMachineCardProps {
    washingProgram: WashingMachineProgram[],
    washingMachine: WashingMachine
}

export const WashingMachineCard: React.FC<WashingMachineCardProps> = ({washingProgram, washingMachine}) => {
    const [program, setProgram] = React.useState<string>('');
    const [selectedProgram, setSelectedProgram] = React.useState<number>(0);
    const handleChange = (event: SelectChangeEvent) => {
        setProgram(event.target.value);
        setSelectedProgram(parseInt(event.target.value))
    };
    const onBookClick = (machineId: number, programId: number) => {
        if (selectedProgram == 0) {
            alert('You have to set washing program')
        } else {
            axios.post(`http://localhost:8080/reservation/2/${machineId}/${programId}`).then(
                response => {
                    window.location.reload()
                }
            )
        }
    }
    const onCancelClick = (machineId: number) => {
        axios.post(`http://localhost:8080/machine/update/${machineId}/`).then(
            response => {
                window.location.reload()
            }
        )
    }
    const isAvailableWashingMachine = washingMachine.available
    return (
        <div className='card-wrapper'>
            <div className={isAvailableWashingMachine ? 'available-style header' : 'not-available-style header'}>
                <img src={headerImage}/>
            </div>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Program</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={program}
                    label="Washing"
                    onChange={handleChange}
                >
                    {washingProgram.map((program, index) =>
                        <MenuItem value={program.id} key={index}>{program.type}, Tempratur: {program.temperature},
                            Duration: {program.duration}</MenuItem>
                    )}
                </Select>
            </FormControl>
            <div className='machine-details'>
                <p>Machine Nr: {washingMachine.id}</p>
                <p>Available: {washingMachine.available.toString()}</p>
                <p>From: {washingMachine.fromDate}</p>
                <p>To: {washingMachine.toDate}</p>
            </div>
            <div>
                {isAvailableWashingMachine ?
                    <Button variant="contained" color="success" onClick={() => {
                        onBookClick(washingMachine.id, selectedProgram)
                    }}>
                        Book now
                    </Button>
                    :
                    <Button variant="outlined" color="error" onClick={() => {
                        onCancelClick(washingMachine.id)
                    }}>
                        Cancel
                    </Button>}
            </div>

        </div>
    )

}
