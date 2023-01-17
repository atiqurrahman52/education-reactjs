import React from 'react';
import MyCourseContent from '../components/myCourses/MyCourseContent';
import MyCoursesBanner from '../components/myCourses/MyCoursesBanner';

const MyCourses = () => {
    return (
        <div>
            <MyCoursesBanner />
            <MyCourseContent />
        </div>
    );
};

export default MyCourses;