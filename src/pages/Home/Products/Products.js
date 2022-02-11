import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './../Product/Product';
import voupa from '../../../images/products/voupa.jpg';
import doupa from '../../../images/products/doupa.jpg';
import t9 from '../../../images/products/t9.jpg';
import bub from '../../../images/products/bub.jpg';
import gudi from '../../../images/products/gudi.jpg';
import gybid from '../../../images/products/gybid.jpg';
import Typography from '@mui/material/Typography';

const products = [
    {
        brand: 'AMS Ha Voupa',
        price: '$16000',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: voupa
    },
    {
        brand: 'Gebrari Fa Doupa',
        price: '$16000',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: doupa
    },
    {
        brand: 'ASW t9 689',
        price: '$16000',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: t9
    },
    {
        brand: 'Tarcedez Bub 20',
        price: '$16500',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: bub
    },
    {
        brand: 'Gudi F8 2019',
        price: '$15000',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: gudi
    },
    {
        brand: 'Joudi A10 Gybid',
        price: '$16700',
        description: ' consectetur adipisicing elit, sed do them and eiusmod tempor incididunt labore dolorie magna aliqua. Ut enim adoren minim venim quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: gybid
    }
]

const Products = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'primary.main' }} variant="h5" component="div">
                Our Products
            </Typography>
            <Typography sx={{ fontWeight: 500, m: 5, mb: 2 }} variant="h3" component="div">
                Our Delivery Product
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    products.map(product => <Product
                        key={product.brand}
                        product={product}
                    ></Product>)

                }
            </Grid>
        </Box>

    );
};

export default Products;