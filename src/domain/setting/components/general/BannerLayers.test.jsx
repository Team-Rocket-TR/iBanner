import React from 'react';

import { render } from '@testing-library/react';

import BannerLayers from './BannerLayers';

describe('BannerLayers component', () => {
  function renderBannerLayers() {
    return render((
      <BannerLayers />
    ));
  }

  it('renders banner layers', () => {
    const { container } = renderBannerLayers(<BannerLayers />);
    expect(container).not.toBeNull();
  });
});
