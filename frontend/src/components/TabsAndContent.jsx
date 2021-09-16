import React, { useState, useEffect } from "react";
import { TabView, TabPanel } from "primereact/tabview";
import { useHistory, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_TABS } from "store";
import { staticRoutes } from "routes";

export default function TabsAndContent() {
  const tabsResults = useQuery(GET_TABS);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabs = tabsResults.data?.tabs;
  const location = useLocation();
  const history = useHistory();
  useEffect(() => {
    setActiveIndex(tabs?.findIndex((tab) => tab === location.pathname));
  }, [tabs, location.pathname]);

  const changeTab = (e) => {
    history.push(tabs[e.index]);
  };
  return (
    <>
      {tabs && (
        <TabView
          activeIndex={activeIndex}
          onTabChange={changeTab}
          className="w-100"
          renderActiveOnly={false}
        >
          {tabs.map((tab) => {
            return (
              <TabPanel key={tab} header={tab === "/" ? "Homepage" : tab}>
                {staticRoutes.find((route) => route.path === tab)?.component}
              </TabPanel>
            );
          })}
        </TabView>
      )}
    </>
  );
}
