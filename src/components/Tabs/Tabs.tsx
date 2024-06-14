import React from "react";
import classes from "./Tabs.module.scss";

interface TabsProps {
  tabs: {
    name: string;
    content: React.ReactNode;
  }[];
}

/**
 * Tabs component that switches the content based on the selected tab
 * @param tabs - An array of tabs to display
 */
export const Tabs = ({ tabs }: TabsProps) => {
  const [selectedTab, setSelectedTab] = React.useState<number | null>(null);

  const handleTabClick = (index: number) => {
    if (index === selectedTab) {
      setSelectedTab(null);
    } else {
      setSelectedTab(index);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.tabs}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${classes.tab} ${
              index === selectedTab ? classes.tabSelected : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className={classes.content}>
        {typeof selectedTab === "number" && tabs[selectedTab].content}
      </div>
    </div>
  );
};
