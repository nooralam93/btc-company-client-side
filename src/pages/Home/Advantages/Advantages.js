import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import brta from '../../../images/advantage/BRTA.png';
import bank from '../../../images/advantage/bank.jpg';
import workshop from '../../../images/advantage/house.jpg';
import collection from '../../../images/advantage/Collection.png';
import bg from '../../../images/bg-2.jpg';
import Advantage from './Advantage';


const advantages = [
    {
        description: 'Fast BRTA Registration Assistance',
        img: brta
    },
    {
        description: 'Hassle Free Bank Loan Processing',
        img: bank
    },
    {
        description: 'In House Workshop Facility For Customers',
        img: workshop
    },
    {
        description: 'Pre-Order Directly From Japan Auction House',
        img: collection
    },

]
const bgImg = {
    background: `url(${bg})`,
    height: 500,
    marginTop: 90,
    marginBottom: 50,
    backgroundSize: 'cover',
}

const Advantages = () => {
    return (
        <Box style={bgImg} sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'primary.main' }} variant="h5" component="div">
                Our Advantages
            </Typography>
            <Typography sx={{ fontWeight: 500, m: 3, color: 'primary.main' }} variant="h5" component="div">
                Why pick BTC Company
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 6, md: 12 }}>
                {
                    advantages.map(advantage => <Advantage
                        key={advantage.brand}
                        advantage={advantage}
                    ></Advantage>)

                }
            </Grid>
        </Box>
    );
};

export default Advantages;