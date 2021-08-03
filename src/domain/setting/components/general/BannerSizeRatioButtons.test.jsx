import React from 'react';

import { render } from '@testing-library/react';

import BannerSizeRatioButtons from './BannerSizeRatioButtons';

describe('BannerSizeRatioButtons component', () => {
  const handleClick = jest.fn();

  function renderButton({
    width = '1:1',
  } = {}) {
    return render((
      <BannerSizeRatioButtons width={width} onClick={handleClick} />
    ));
  }

  it('renders BannerSizeRatioButtons component', () => {
    const { container } = renderButton(<BannerSizeRatioButtons />);

    expect(container).not.toBeNull();
  });
});
