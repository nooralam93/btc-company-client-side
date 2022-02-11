import React from 'react';
// import Register from '../../Login/Register/Register';
import Advantages from '../Advantages/Advantages';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Advantages></Advantages>

        </div>
    );
};

export default Home;