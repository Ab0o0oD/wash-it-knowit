import React, {useEffect, useState} from "react";
import axios from "axios";
import {Reservation, User} from "../business-types";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import "./reservations-overview.css"
import {useNavigate} from "react-router";

interface ReservationsOverviewProps {

}

export const ReservationsOverview: React.FC<ReservationsOverviewProps> = () => {
    const user: User = JSON.parse(localStorage.getItem("user")!!)
    const userId = user.id
    const [reservations, setReservations] = useState<Reservation[]>()
    useEffect(() => {
        axios.get(`http://localhost:8080/reservation/${userId}`)
            .then(resp => resp.data)
            .then(data => setReservations(data))
    }, [userId])
    const navigate = useNavigate()
    const onClickBack = () => {
        navigate('/welcome')
    }
    return (
        <div>
            <div className="reservaion-table-container">

                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>User Nr</TableCell>
                                <TableCell>Reservation Nr</TableCell>
                                <TableCell>Washing machine Nr</TableCell>
                                <TableCell>Program Nr</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {reservations?.map((reservation) => (
                                <TableRow
                                    key={reservation.id}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell>{reservation.userId}</TableCell>
                                    <TableCell>{reservation.id}</TableCell>
                                    <TableCell>{reservation.machineId}</TableCell>
                                    <TableCell>{reservation.programId}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div>
                <Button size="large" variant="contained" onClick={onClickBack}>Back to main</Button>
            </div>
        </div>
    )

}