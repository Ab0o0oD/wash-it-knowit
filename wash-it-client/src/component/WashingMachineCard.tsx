import React from "react";
import './washing-machine-card.css';
import headerImage from '../assets/washing-machine.png'
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {User, WashingMachine, WashingMachineProgram} from "../business-types";
import axios from "axios";

interface WashingMachineCardProps {
    washingProgram: WashingMachineProgram[],
    washingMachine: WashingMachine,
    user: User
}

export const WashingMachineCard: React.FC<WashingMachineCardProps> = ({
                                                                          washingProgram,
                                                                          washingMachine,
                                                                          user
                                                                      }) => {
    const [program, setProgram] = React.useState<string>('');
    const [selectedProgram, setSelectedProgram] = React.useState<number>(0);
    const handleChange = (event: SelectChangeEvent) => {
        setProgram(event.target.value);
        setSelectedProgram(parseInt(event.target.value))
    };
    const onBookClick = (machineId: number, programId: number) => {
        if (selectedProgram === 0) {
            alert('You have to set washing program')
        } else {
            axios.post(`http://localhost:8080/reservation/${user.id}/${machineId}/${programId}`).then(
                response => {
                    window.location.reload()
                }
            )
        }
    }
    const onCancelClick = (machineId: number) => {
        axios.post(`http://localhost:8080/machine/update/${machineId}/`).then(
            () => {
                window.location.reload()
            }
        )
    }
    const isAvailableWashingMachine = washingMachine.available
    return (
        <div className='card-wrapper'>
            <div className={isAvailableWashingMachine ? 'available-style header' : 'not-available-style header'}>
                <img src={headerImage} alt="machine"/>
            </div>

            <FormControl fullWidth>
                <InputLabel
                    id="demo-simple-select-label">{washingMachine.available ? "Program" : 'Reserved'}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={program}
                    label="Washing"
                    disabled={!washingMachine.available}
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
