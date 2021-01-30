import React from 'react';

import GeneralContainer from './GeneralContainer';
import BackgroundContainer from './BackgroundContainer';
import ContentContainer from './ContentContainer';

const SettingContainer = () => (
  <section>
    <GeneralContainer />
    <hr />
    <BackgroundContainer />
    <hr />
    <ContentContainer />
  </section>
);

export default SettingContainer;
