import React from "react";
import './Washing-machine-card.css';
import headerImage from '../assets/washing-machine.png'
import {Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {WashingMachine, WashingMachineProgram} from "../business-types";

interface WashingMachineCardProps {
    washingProgram: WashingMachineProgram[],
    washingMachine: WashingMachine
}

export const WashingMachineCard: React.FC<WashingMachineCardProps> = ({washingProgram, washingMachine}) => {
    const [program, setProgram] = React.useState('');
    const handleChange = (event: SelectChangeEvent<string>) => {
        setProgram(event.target.value);
    };

    const isAvailable = washingMachine.available
    return (
        <div className='card-wrapper'>
            <div className={isAvailable ? 'available-style header' : 'not-available-style header'}>
                <img src={headerImage}/>
            </div>

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">program</InputLabel>
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
                {isAvailable ?
                    <Button variant="contained" color="success">
                        Book now
                    </Button>
                    :
                    <Button variant="outlined" color="error">
                        Cancel
                    </Button>}
            </div>

        </div>
    )

}
