import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BannerSizeRatioButton from './BannerSizeRatioButton';

describe('BannerSizeRatioButton component', () => {
  const handleClick = jest.fn();

  function renderButton({
    ratio = '1:1',
    width = '500',
    height = '500',
  } = {}) {
    return render((
      <BannerSizeRatioButton
        ratio={ratio}
        width={width}
        height={height}
        onClick={handleClick}
      />
    ));
  }

  it('render button', () => {
    const { getByText } = renderButton();

    expect(getByText(/1:1/)).not.toBeNull();
  });

  it('ratio button click event', () => {
    const { getByText } = renderButton();
    const button = getByText('1:1');

    fireEvent.click(button);

    expect(handleClick).toBeCalledTimes(1);
  });
});
