import React from 'react';

import { useSelector } from 'react-redux';

import { Tabs, Tab, TabContent } from 'components/tab';

import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

import { GeneralContainer, BackgroundContainer, ContentContainer } from '.';

const SettingContainer = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <section>
      <Tabs>
        <Tab label="Gator">
          <TabContent>
            <GeneralContainer />
          </TabContent>
        </Tab>
        <Tab label="Croc">
          <TabContent>
            <BackgroundContainer />
          </TabContent>
        </Tab>
        <Tab label="Sarcosuchus">
          <TabContent>
            <ContentContainer />
          </TabContent>
        </Tab>
      </Tabs>
      {(theme === 'light')
        ? <LightTheme />
        : <DarkTheme />}
    </section>
  );
};

export default SettingContainer;
