import React from 'react';
import Carousel from './Carousel';
import Footer from './Footer';
import Navber from './Navber';
import Stack from './Stack';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Carousel></Carousel>
            <Stack></Stack>
            <Footer></Footer>
        </div>
    );
};

export default Home;