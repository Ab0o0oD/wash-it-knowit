import {Button, TextField} from "@mui/material";
import './log-in-page.css';
import React, {ChangeEvent, useState} from "react";
import bg from '../assets/washit-bg.jpg'
import axios from "axios";
import {useNavigate} from "react-router";

interface LogInPageProps {
}

export const LogInPage: React.FC<LogInPageProps> = ({}) => {
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [userIsFound, setUserIsFound] = useState<boolean>()
    const navigate = useNavigate()
    const onSubmit = () => {
        axios.post(`http://localhost:8080/user/${firstName}/${lastName}`).then(response => {
            return response.data
        }).then(data => {
                setUserIsFound(true)
                localStorage.setItem("user", JSON.stringify(data))
                navigate('/welcome')

            }
        ).catch(error => {
            setUserIsFound(false)
        })
    }

    const onChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value)
    }
    const onChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    return (
        <div className='login-container' style={{backgroundImage: `url(${bg})`}}>
            <div className='form-wrapper'>
                <h2>Weclome to Wash it landury service</h2>
                {userIsFound === false && (<h3 style={{color: "red"}}> User not found!</h3>)
                }
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
                            onSubmit()
                        }}
                >
                    Log in
                </Button>
                <Button variant="contained" color="primary" style={{marginTop: "20px"}}
                        onClick={() => {
                            navigate('/signup')
                        }}
                >
                    Sign up
                </Button>
            </div>
        </div>
    )

}