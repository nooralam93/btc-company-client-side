import Grid from '@mui/material/Grid';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BookingModal from '../Modal/BookingModal';



const Booking = ({ booking, date, setBookingSuccess }) => {
    const { brand, price, img, stock } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Card sx={{ maxWidth: 345, py: 5 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={img}
                        alt=""
                    />
                    <CardContent>
                        <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                            {brand}
                        </Typography>

                        <Typography gutterBottom variant="h5" component="div">
                            Stock Available{stock}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Price: {price}
                        </Typography>
                        <Button onClick={handleBookingOpen} sx={{ mx: "auto" }} variant="contained">Booking Now</Button>
                    </CardContent>

                </Card>
            </Grid >
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;