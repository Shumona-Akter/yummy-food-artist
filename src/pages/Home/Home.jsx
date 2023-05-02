import React from 'react';
import HomeBanner from '../../Scetion/HomeBanner';
import OurStory from '../../Scetion/OurStory';
import Testimonial from '../../Scetion/Testimonial';
import AllChef from '../../Scetion/AllChef';

const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <OurStory></OurStory>
            <AllChef></AllChef>
            <Testimonial></Testimonial>
        </>
    );
};

export default Home;