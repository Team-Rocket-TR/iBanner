import React from 'react';

import { Deck, Card } from 'components/card';

import { Contributors, ContactUs, Sponsor } from 'domain/setting/components';

const SponsorContainer = () => (
  <Deck>
    <Card>
      <Contributors />
    </Card>
    <Card>
      <ContactUs />
    </Card>
    <Card>
      <Sponsor />
    </Card>
  </Deck>
);

export default SponsorContainer;
