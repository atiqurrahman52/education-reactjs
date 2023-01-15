import React from 'react';
import { keyBrandData } from '../../data/about/keyBrandData';

const KeyBrand = () => {
    return (
        <div class="container">
        <div class="py-8 xl:py-16">
          <h1
            class="text-center font-poppins font-medium text-sm xl:text-[32px] leading-5 xl:leading-[48px] text-primary mb-5 md:mb-6"
          >
            Key supporters
          </h1>
          <div
            class="flex flex-wrap items-center justify-center gap-y-6 xl:justify-between space-x-3 md:space-x-[36px] xl:space-x-[73px]"
          >
           {keyBrandData.map(({id,img}) =>
            <img
            class="w-[50px] xl:w-[150px] h-5 xl:h-10"
            src={img}
            alt=""
          />
           )}
            
          </div>
        </div>
      </div>
    );
};

export default KeyBrand;