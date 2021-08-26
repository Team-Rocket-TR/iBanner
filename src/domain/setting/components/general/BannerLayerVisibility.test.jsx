import React from 'react';

import { render } from '@testing-library/react';

import BannerLayerVisibility from './BannerLayerVisibility';

describe('BannerLayerVisibility component', () => {
  function renderBannerLayerVisibility() {
    return render((
      <BannerLayerVisibility />
    ));
  }

  it('renders banner layers', () => {
    const { container } = renderBannerLayerVisibility(<BannerLayerVisibility />);
    expect(container).not.toBeNull();
  });
});
