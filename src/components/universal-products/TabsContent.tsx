import Image from "next/image";
import React from "react";

interface TabsContentProps {
  tabsData: { name: string; content: React.JSX.Element; imgPath: string }[];
  activeTab: number;
}

const TabsContent: React.FC<TabsContentProps> = ({ tabsData, activeTab }) => {
  return (
    <>
      <div className="border border-gray-300 dark:border-stone-700 border-t-0 h-fit">
        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
          <div className="w-full lg:w-1/2 p-10 pb-0 lg:pb-10">
            {tabsData[activeTab].content}
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="w-2/3 py-6">
              {tabsData.map((tab, index) => (
                <Image
                  key={tab.name}
                  src={tab.imgPath}
                  alt="Product"
                  width={200}
                  height={200}
                  className={`w-full h-full object-cover ${
                    activeTab === index ? "flex" : "hidden"
                  }`}
                  priority
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsContent;
