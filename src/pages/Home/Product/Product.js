import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';



const Product = (props) => {
    // console.log(props)
    const { brand, price, description, img, star } = props.product;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{ width: "75%", height: "200px", margin: '0 auto' }}
                    image={img}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {brand}
                    </Typography>
                    <Typography variant="h4" component="div">
                        {price}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {description}
                    </Typography>

                </CardContent>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    readonly
                ></Rating>
                <br />
                <Link to='./showroom' style={{ textDecoration: 'none' }}><Button variant="contained">Buy Now</Button></Link>


            </Card>

        </Grid>
    );
};

export default Product;