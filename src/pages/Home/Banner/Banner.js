import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import bg from '../../../images/bannerBg.jpg'
import banner from '../../../images/banner.png'


const bannerBg = {
    background: `url(${bg})`,
    height: 450,
    // marginTop: 20,
    marginBottom: 50,
    backgroundSize: 'cover',
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',


    height: 350,
}

const Banner = () => {
    return (
        <Box style={bannerBg} sx={{ width: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6} >
                    <Box style={verticalCenter}>
                        <img style={{ width: "100%", hight: '200px' }} src={banner} alt="" />

                    </Box>
                    <Button style={{ marginTop: 50, float: 'left', px: 2 }} variant="contained">Explore</Button>
                </Grid>
            </Grid>
        </Box>

    );
};

export default Banner;