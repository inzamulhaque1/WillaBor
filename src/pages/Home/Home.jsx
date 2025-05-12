import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './Products';
import TopProducts from './TopProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className='md:w-10/12 mx-auto'><Products></Products></div>
            <div className='md:w-10/12 mx-auto'><TopProducts></TopProducts></div>
        </div>
    );
};

export default Home;