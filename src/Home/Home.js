import React from 'react';
import Carousel from './Carousel';
import Navber from './Navber';
import Stack from './Stack';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Carousel></Carousel>
            <Stack></Stack>
        </div>
    );
};

export default Home;