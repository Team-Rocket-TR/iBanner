import React, { useState } from 'react';

import styled from 'styled-components';

import TabItem from './TabItem';

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding-left: 0;
`;
const Tab = styled.div``;
const TabContent = styled.div``;

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClickTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <TabList>
        {children.map(({ props: { label } }) => (
          <TabItem
            key={label}
            label={label}
            active={label === activeTab}
            onClick={handleClickTab}
          />
        ))}
      </TabList>
      {children.map(({ props }) => ((props.label === activeTab) ? props.children : null))}
    </div>
  );
};

export default Tabs;
export { Tab, TabContent };
