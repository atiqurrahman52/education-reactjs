import React from 'react';
import BecomeInstructor from '../components/instructor/BecomeInstructor';
import CareerSteps from '../components/instructor/CareerSteps';
import InstructorBanner from '../components/instructor/InstructorBanner';
import Reviews from '../components/instructor/Reviews';

const Instructor = () => {
    return (
        <div>
            <InstructorBanner />
            <BecomeInstructor />
            <Reviews />
            <CareerSteps />
        </div>
    );
};

export default Instructor;