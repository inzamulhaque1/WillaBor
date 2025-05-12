import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className='w-10/12 mx-auto'><Products></Products></div>
        </div>
    );
};

export default Home;