import { ArrowUpRight } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";
import { subjectsAreasData } from "../../data/home/subjectsAreasData";

const SubjectAreas = () => {
  return (
    <div className="container">
      <div className="py-8 xl:py-10">
        <h1 className="font-poppins  text-base xl:text-2xl leading-6 text-primary mb-6 xl:mb-8">
          <span className="font-semibold">Subject </span> Areas
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          {subjectsAreasData.map(({ id, icon, name }) => {
            return (
              <Link
                key={id}
                to="#"
                className="flex justify-between rounded-md items-center py-2.5 xl:py-5 px-4 bg-tertiary w-full"
              >
                <div className="flex items-center gap-4">
                  <img src={icon} alt="" />
                  <p className="text-disable font-poppins text-sm xl:text-base leading-7">
                    {name}
                  </p>
                </div>

                <ArrowUpRight size={24} className="text-success" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SubjectAreas;
