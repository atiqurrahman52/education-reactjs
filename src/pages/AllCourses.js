import React from 'react';
import AllCourse from '../components/allCourses/AllCourse';
import AllCoursesBanner from '../components/allCourses/AllCoursesBanner';
import RelatedTopic from '../components/allCourses/RelatedTopic';
import BecomeInstructor from '../components/share/BecomeInstructor';
import FeaturedCourses from '../components/share/FeaturedCourses';

const AllCourses = () => {
    return (
        <div>
            
            <AllCoursesBanner />
            <AllCourse />
            <RelatedTopic />
            <FeaturedCourses />
            <BecomeInstructor />
        </div>
    );
};

export default AllCourses;