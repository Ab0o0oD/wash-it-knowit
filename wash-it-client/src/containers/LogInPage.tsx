import {Button, TextField} from "@mui/material";
import './log-in-page.css';
import React, {ChangeEvent, useState} from "react";
import bg from '../assets/washit-bg.jpg'
import {User} from "../business-types";

export const LogInPage: React.FC = () => {
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const user: User = {
        id: 0,
        firstName: '',
        lastName: '',
        mobileNumber: ''
    }

    console.log(firstName, lastName)
    const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    return (
        <div className='container' style={{backgroundImage: `url(${bg})`}}>
            <div className='form-wrapper'>
                <h2>Weclome to Wash it landury service</h2>
                <TextField
                    id="outlined-basic"
                    label="First name"
                    variant="outlined"
                    className='text-field'
                    onChange={onChangeFirstName}/>
                <TextField id="outlined-basic" label="Last name" variant="outlined" className='text-field'
                           onChange={onChangeLastName}/>
                <Button variant="contained" color="success" style={{marginTop: "20px"}}
                        onClick={() => {

                        }}
                >
                    Log in
                </Button>
            </div>
        </div>
    )

}