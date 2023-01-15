import React from 'react';
import AboutBanner from '../components/aboutUs/AboutBanner';
import KeyBrand from '../components/aboutUs/KeyBrand';
import OurMission from '../components/aboutUs/OurMission';
import OurStory from '../components/aboutUs/OurStory';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner />
            <OurStory />
            <OurMission />
            <KeyBrand />
        </div>
    );
};

export default AboutUs;