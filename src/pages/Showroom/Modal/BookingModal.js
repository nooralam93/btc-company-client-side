import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from './../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    mx: 'auto'
};

const BookingModal = ({ openBooking, handleBookingClose, booking, setBookingSuccess, date }) => {
    const { brand, price } = booking;
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, date: '', phone: '' }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        console.log(newInfo)
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e => {
        // collect data
        const showroom = {
            ...bookingInfo,
            carName: brand,
            date: date.toLocaleDateString()
        }
        // send to the server
        console.log(showroom);
        fetch('https://warm-tundra-39879.herokuapp.com/showrooms', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(showroom)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleBookingClose();
                }
            });
        handleBookingClose();

        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={style} >
                    <Typography sx={{ mx: "auto" }} id="transition-modal-title" variant="h6" component="h2">
                        {brand}
                    </Typography>
                    <form onSubmit={handleBookingSubmit}>

                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            name="customerName"
                            // onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            // onBlur={handleOnBlur}
                            defaultValue={user.email}
                            size="small"
                        />

                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            defaultValue={price}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="date"
                            defaultValue={date.toDateString()}
                            // defaultValue="date"
                            onBlur={handleOnBlur}
                            size="small"
                        />
                        <Button type="submit" variant="contained">Submit</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;