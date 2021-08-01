import React, { useState } from 'react';

import { withStyles } from '@material-ui/core/styles';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CustomPanel from './CustomPanel';

const TabItem = withStyles((theme) => ({
  root: {
    minWidth: '82px',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => (
  <Tab {...props} />
));

export default function CustomTabs({
  tabs = [],
  tabPanels = [],
}) {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon tabs"
        orientation="vertical"
      >
        {tabs.map(({ icon, label }, index) => (
          <TabItem
            key={`tab-${index + 1}`}
            icon={icon}
            label={label}
          />
        ))}
      </Tabs>
      {tabPanels.map(({ component }, index) => (
        <CustomPanel
          key={`panel-${index + 1}`}
          index={index}
          value={selectedTab}
        >
          {component}
        </CustomPanel>
      ))}
    </>
  );
}
