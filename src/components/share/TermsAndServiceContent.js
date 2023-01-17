const TermsAndServiceContent = ({ data }) => {
  const { header, date, summaryTitle, summaryDetails, contentItems, items } =
    data;

  return (
    <div id="privacy" className="privacy-tab-content">
      <div className="flex flex-col xl:flex-row xl:justify-between mb-5">
        <h1 className="font-poppins font-semibold text-lg xl:text-2xl leading-9 text-primary">
          {header}
        </h1>
        <p className="font-poppins italic text-[10px] xl:text-sm leading-[15px] xl:leading-[21px] opacity-[0.4]">
          This {header} was last updated on {date}
        </p>
      </div>
      <div className="mb-5 xl:mb-8">
        <h3 className="font-poppins font-medium text-lg leading-[27px] mb-2">
          {summaryTitle}
        </h3>
        <p className="font-poppins text-sm xl:text-base leading-[21px] xl:leading-6 text-primary opacity-[0.8] mb-4">
          {summaryDetails}
        </p>
      </div>

      <div className="mb-5 xl:mb-8">
        <h1 className="mb-3 xl:mb-[14px] font-poppins font-medium xl:font-semibold text-lg leading-[27px] text-primary">
          Table of Contents
        </h1>
        <div className="">
          {contentItems.map((item, i) => (
            <p
              key={i}
              className="font-poppins font-medium text-xs xl:text-base leading-[18px] xl:leading-6 text-[#0042A1] mb-1"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="">
        {items.map(({ id, title, info }) => (
          <div key={id}>
            <h3 className="font-poppins font-medium text-lg leading-[27px] mb-2">
              {title}
            </h3>
            <p className="font-poppins text-sm xl:text-base leading-[21px] xl:leading-6 text-primary opacity-[0.8] mb-4">
              {info}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndServiceContent;
