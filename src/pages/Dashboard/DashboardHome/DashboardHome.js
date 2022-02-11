import * as React from 'react';
import { Grid } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import BookingCars from '../BookingCars/BookingCars';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={8} sm={6}>
                    <Calender
                        date={date}
                        setDate={setDate}
                    ></Calender>
                </Grid>
                <Grid item xs={4} sm={6}>
                    <BookingCars date={date}></BookingCars>
                </Grid>

            </Grid>
        </div>
    );
};

export default DashboardHome;