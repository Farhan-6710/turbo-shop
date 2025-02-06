import React, { useState } from "react";
import TabsHeader from "./TabsHeader";
import { tabsData } from "@/data/tabsSectionData";
import TabsContent from "./TabsContent";

const UniversalProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="dark:bg-blackTwo bg-whiteTwo py-10">
        <h2 className="text-center text-2xl md:4xl font-bold mb-6 px-6">
          UNIVERSAL PRODUCTS WE PROVIDE
        </h2>

        <div className="container mx-auto">
          <div className="mx-4 bg-whiteOne dark:bg-blackOne">
            {/* Child Component Handling Tabs */}
            <TabsHeader
              tabsData={tabsData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {/* Tab Content with Image */}
            <TabsContent tabsData={tabsData} activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversalProducts;
