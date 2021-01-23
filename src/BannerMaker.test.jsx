import React from 'react';

import { render } from '@testing-library/react';

import BannerMaker from './BannerMaker';

describe('BannerMaker', () => {
  it('renders title', () => {
    const { container } = render(<BannerMaker />);

    expect(container).toContainHTML('<header id="mainHeader">');
    expect(container).toContainHTML('<article id="mainArticle">');
    expect(container).toContainHTML('<nav id="mainNav">');
  });
});
