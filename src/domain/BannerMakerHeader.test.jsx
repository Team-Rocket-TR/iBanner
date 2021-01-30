import React from 'react';

import { render } from '@testing-library/react';

import BannerMakerHeader from './BannerMakerHeader';

describe('BannerMakerHeader', () => {
  it('renders app title', () => {
    const { container } = render(<BannerMakerHeader />);

    expect(container).toHaveTextContent(/Banner\+/);
    expect(container).toHaveTextContent(/Settings/);
  });
});
