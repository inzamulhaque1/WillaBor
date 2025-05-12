import React from 'react';
import Banner from './Banner';
import AboutUs from './AboutUs';
import Products from './Products';
import TopProducts from './TopProducts';
import Feature from './Feature';
import Video from './Video';
import Details from './Details';
import Rooms from './Rooms';
import Fourm from './Fourm';
import Map from './Map';
import Testimonial from './Testimonial';
import BookNow from './BookNow';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className='md:w-10/12 mx-auto'><Products></Products></div>
            <div className='md:w-10/12 mx-auto'><TopProducts></TopProducts></div>
            <div className='md:w-10/12 mx-auto'><Feature></Feature></div>
            <div className='md:w-10/12 mx-auto'><Video></Video></div>
            <Details></Details>
            <div className='md:w-10/12 mx-auto'><Rooms></Rooms></div>
            <div className='md:w-10/12 mx-auto'><Fourm></Fourm></div>
            <div className='md:w-10/12 mx-auto'><Map></Map></div>
            <div className='md:w-10/12 mx-auto'><Testimonial></Testimonial></div>
            <div className='md:w-10/12 mx-auto'><BookNow></BookNow></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;