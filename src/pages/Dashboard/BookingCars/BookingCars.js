import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const BookingCars = ({ date }) => {
    const { user, token } = useAuth();
    const [bookingCars, setBookingCars] = useState([]);

    useEffect(() => {
        const url = `https://warm-tundra-39879.herokuapp.com/showrooms?email=${user.email}&date=${date}`

        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setBookingCars(data))
    }, [date, user.email])
    return (
        <div>
            <h1>Booking {bookingCars.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="showrooms table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Name</TableCell>
                            <TableCell align="center">Brand</TableCell>
                            <TableCell align="center">Date</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {bookingCars.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" align="center" scope="row">
                                    {row.customerName}
                                </TableCell>
                                <TableCell align="center">{row.carName}</TableCell>
                                <TableCell align="center">{row.date}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default BookingCars;