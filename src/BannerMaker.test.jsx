import React from 'react';

import { render } from '@testing-library/react';

import BannerMaker from './BannerMaker';

describe('BannerMaker', () => {
  it('renders title', () => {
    const { container } = render(<BannerMaker />);

    expect(container).toHaveTextContent('Banner Maker');
  });
});
