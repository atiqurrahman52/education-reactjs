import React from 'react';
import CareerSteps from '../components/instructor/CareerSteps';
import InstructorBanner from '../components/instructor/InstructorBanner';
import Reviews from '../components/instructor/Reviews';

const Instructor = () => {
    return (
        <div>
            <InstructorBanner />
            <Reviews />
            <CareerSteps />
        </div>
    );
};

export default Instructor;