import React from 'react';
import { Link } from 'react-router-dom';
import { RelatedTopicsData } from '../../data/allCourses/relatedTopicsData';

const RelatedTopic = () => {
    return (
        <div class="container">
        <div class="py-10 xl:py-16 md:block hidden">
          <h2
            class="capitalize mb-4 md:mb-10 text-center font-poppins text-primary leading-6 xl:leading-10 text-2xl xl:text-3xl"
          >
            <span class="font-semibold">related topics</span> to explore
          </h2>
          <div class="flex flex-wrap justify-center gap-6">
           {RelatedTopicsData.map(({id,topic,path}) =>{
            return(
                <Link key={id}
                to={path}
                 class="py-3 xl:py-4 px-8 xl:px-10 flex shrink-0 items-center font-poppins border border-[#9DA6BA] rounded-[4px] leading-5 text-primary font-medium textsm xl:text-base"
                 >{topic}
                 </Link>
             
            )
           })}
          </div>
        </div>
      </div>
    );
};

export default RelatedTopic;