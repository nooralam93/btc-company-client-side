import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import voupa from '../../../images/products/voupa.jpg';
import doupa from '../../../images/products/doupa.jpg';
import t9 from '../../../images/products/t9.jpg';
import bub from '../../../images/products/bub.jpg';
import gudi from '../../../images/products/gudi.jpg';
import gybid from '../../../images/products/gybid.jpg';
import Typography from '@mui/material/Typography';
import Booking from '../Booking/Booking';

const bookings = [
    {
        brand: 'AMS Ha Voupa',
        price: '$16000',
        stock: 12,
        img: voupa
    },
    {
        brand: 'Gebrari Fa Doupa',
        price: '$16000',
        stock: 12,
        img: doupa
    },
    {
        brand: 'ASW t9 689',
        price: '$16000',
        stock: 12,
        img: t9
    },
    {
        brand: 'Tarcedez Bub 20',
        price: '$16500',
        stock: 12,
        img: bub
    },
    {
        brand: 'Gudi F8 2019',
        price: '$15000',
        stock: 12,
        img: gudi
    },
    {
        brand: 'Joudi A10 Gybid',
        price: '$16700',
        stock: 12,
        img: gybid
    }
]

const ShowroomProducts = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>

            <Typography gutterBottom variant="h4" sx={{ mt: 5 }} component="div">
                Showroom Products Order: {date.toDateString()}
            </Typography>
            {bookingSuccess && <Alert severity="success">Booking successful</Alert>
            }
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.brand}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    >
                    </Booking>)
                }

            </Grid>
        </Container>
    );
};

export default ShowroomProducts;