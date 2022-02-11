import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const Advantage = (props) => {
    const { description, img } = props.advantage;
    return (
        <Grid item xs={3} sm={3} md={3}>
            <Card sx={{ minWidth: 275, boxShadow: 0, mt: 5, height: "250px" }}>
                <CardMedia
                    component="img"
                    style={{ width: "50%", margin: 'auto' }}
                    image={img}
                />

                <CardContent>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>

            </Card>


        </Grid>
    );
};

export default Advantage;