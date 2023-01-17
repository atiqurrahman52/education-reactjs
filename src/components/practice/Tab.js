import React, { useState } from "react";

const Tab = () => {
  const [isActive, setIsActive] = useState(2);
  const tabs = [
    {
      id: 0,
      tabTitle: "Tab 1",
      title: "Title 1",
      content: "a",
    },
    {
      id: 1,
      tabTitle: "Tab 2",
      title: "Title 2",
      content: "b",
    },
    {
      id: 2,
      tabTitle: "Tab 3",
      title: "Title 3",
      content: "c",
    },
  ];
  const handleTabClick = (id) => {
    setIsActive(id);
  };
  return (
    <div className="container">
      <div className="tabs  flex space-x-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id}
            className={`font-nunito capitalize font-extrabold p-2.5 rounded-md  
               ${
                 isActive === tab.id
                   ? "text-white bg-[#F1B4C4] border-[#D00338]"
                   : "text-green-600 bg-transparent border-transparent"
               }  cursor-pointer`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {isActive === tab.id && (
              <div>
                <p>{tab.title}</p>
                <p>{tab.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
