import { skillsData } from "../../data/home/skillsData";

const Skills = () => {
  return (
    <div className="bg-success">
      <div className="container">
        {/* <div className="flex items-center justify-between xs:gap-6 sm:gap-9 md:gap-10 lg:gap-24 py-4 2xl:py-8 sm:px-6 xl:px-0"> */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 py-4 md:py-6 xl:py-8">
            {skillsData.map((item, i) => {
              return (
                <div className="flex items-center gap-4 w-full">
                  <img key={i} className="h-7 lg:h-10 2xl:h-16 w-7 lg:w-10 2xl:w-16" src={item.img} alt="" />
                  <p className="whitespace-pre-line font-normal md:font-semibold text-[11px] lg:text-sm 2xl:text-lg text-white leading-5 lg:leading-7">
                    {item.details}
                  </p>
                </div>
              );
            })}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
