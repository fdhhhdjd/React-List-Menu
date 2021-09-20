import React, { useState } from "react";
import "./Image.css";
import { tabLabels } from "../../data/ContentTitle";
import Tabs from "./Tab";
const ShowImage = () => {
  const [activeTab, setActiveTab] = useState(tabLabels.TAI_LA_SO_1);
  const onClickTab = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <Tabs activeTabName={activeTab} onClickTab={onClickTab} />
    </div>
  );
};

export default ShowImage;
