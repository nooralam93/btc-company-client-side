import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MdPhone from '@mui/icons-material/Phone';
import { Avatar, Chip } from '@mui/material';
import fb from '../../../images/fb.png';
import twitter from '../../../images/twitter.png';



const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#cfe8fc', height: '150px', mt: 5, position: 'bottom' }}>
            <Grid container spacing={2} >
                <Grid item xs={12} md={6}>
                    <Typography variant="h5"> Contact Us</Typography>
                    <Typography> TelPhon:+12334562</Typography>
                    <Typography> Mobile:012356236</Typography>
                    <Chip icon={<MdPhone />} label="Call me" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h5'>Social-Media</Typography>

                    <Chip
                        avatar={<Avatar alt="Natacha" src={fb} />}
                        label="Facebook"
                        variant="outlined"
                    />
                    <br />
                    <Chip
                        avatar={<Avatar alt="Natacha" src={twitter} />}
                        label="Twitter"
                        variant="outlined"
                    />
                </Grid>

            </Grid>

        </Box>
    );
};

export default Footer;