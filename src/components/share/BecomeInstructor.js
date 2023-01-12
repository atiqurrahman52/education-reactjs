import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BecomeInstructor = () => {


    const navigate = useNavigate();
    const navigateToDestination = (id) => {
      navigate(`/instructor/${id}`);
    };

    return (
        <div>
        {/* <Link href="./pages/instructor.html"> */}
        {/* <Link to={`/destination/${id}`}> */}
        <Link to='/instructor'>
          <div
            class="instructor-bg bg-cover bg-center bg-no-repeat w-full h-[203px] xl:h-[287px]"
          >
            <div class="flex flex-col justify-center items-center h-full">
              <h3
                class="font-raleway font-bold text-2xl xl:text-5xl leading-9 xl:leading-[72px] text-primary mb-1"
              >
                Become An Instructor
              </h3>
              <p
                class="font-raleway font-medium text-xs xl:text-sm leading-4 xl:leading-6 text-gray text-center mb-4 xl:mb-6"
              >
                Join one of the world’s largest online learning marketplaces.
                <br class="xl:block hidden" />
                Get started
              </p>
              <button
                class="py-2 xl:py-2.5 px-7 xl:px-16 rounded-md text-white bg-success font-raleway font-medium text-sm xl:text-base leading-5 xl:leading-6"
              >
                Start Now
              </button>
            </div>
          </div>
        </Link>
      </div>
    );
};

export default BecomeInstructor;