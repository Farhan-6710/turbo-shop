import React from "react";

interface TabsProps {
    tabsData: { name: string; content: React.JSX.Element; imgPath: string }[];
    activeTab: number;
    setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabsHeader: React.FC<TabsProps> = ({ tabsData, activeTab, setActiveTab }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full">
      {tabsData.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`px-4 py-5 text-lg font-semibold transition-colors border border-gray-300 dark:border-stone-700 uppercase hover:bg-primary hover:text-whiteOne ${
            activeTab === index
              ? "dark:text-whiteOne text-whiteOne bg-primary border-transparent"
              : "dark:text-whiteOne text-blackOne"
          }`}
        >
          {tab.name}
        </button>
      ))}
    </div>
  );
};

export default TabsHeader;
