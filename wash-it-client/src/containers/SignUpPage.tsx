import bg from "../assets/washit-bg.jpg";
import {Button, TextField} from "@mui/material";
import React from "react";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import axios from "axios";

interface SignUpPageProps {

}

export const SignUpPage: React.FC<SignUpPageProps> = ({}) => {
    type FormData = {
        firstName: string;
        lastName: string;
        mobileNumber: string
    };
    const navigate = useNavigate()
    const {register, setValue, handleSubmit, formState: {errors}} = useForm<FormData>();
    const onSubmit = handleSubmit(data => {
        const firstName = data.firstName
        const lastName = data.lastName
        const mobileNumber = data.mobileNumber
        axios.post(`http://localhost:8080/user/${firstName}/${lastName}/${mobileNumber}`).then(
            response => {
                alert('user is registerd successfully')
            }
        ).catch(error => {
            alert("Somthing went error")
        })
    })


    return (
        <div className='login-container' style={{backgroundImage: `url(${bg})`}}>
            <div className='box-signup-wrapper'>
                <form onSubmit={onSubmit}>
                    <div className='form-signup-wrapper'>
                        <h2>Sign up</h2>

                        <TextField
                            id="outlined-basic"
                            label="First name"
                            variant="outlined"
                            className='text-field'

                            {...register("firstName")}/>
                        <TextField id="outlined-basic" label="Last name" variant="outlined" className='text-field'
                                   {...register("lastName")}/>
                        <TextField id="outlined-basic" label="Mobile Number" variant="outlined" className='text-field'
                                   {...register("mobileNumber")}/>
                        <Button variant="contained" color="primary" style={{marginTop: "20px"}}
                                onClick={onSubmit}
                        >
                            Sign Up
                        </Button> <Button variant="contained" color="primary" style={{marginTop: "20px"}}
                                          onClick={() => {
                                              navigate('/')
                                          }}
                    >
                        back to login
                    </Button>

                    </div>
                </form>
            </div>
        </div>
    )

}