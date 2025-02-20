import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

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
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
            >
              {tabsData[activeTab].content}
            </motion.div>
          </div>
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <div className="w-2/3 py-6">
              {tabsData.map((tab, index) => (
                <motion.div
                  key={tab.name}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    filter: activeTab === index ? "blur(0px)" : "blur(10px)",
                  }}
                  exit={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                >
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
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsContent;