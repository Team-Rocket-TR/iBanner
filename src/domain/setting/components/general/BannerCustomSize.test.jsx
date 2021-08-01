import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import BannerCustomSize from './BannerCustomSize';

describe('BannerCustomSize component', () => {
  const handleChange = jest.fn();

  function renderCustomSize({
    name = 'width',
    value = '500',
    placeholder = 'Banner Width',
  } = {}) {
    return render((
      <BannerCustomSize
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    ));
  }

  it('width placeholder value', () => {
    const { getByPlaceholderText } = renderCustomSize();

    expect(getByPlaceholderText(/Banner Width/)).not.toBeNull();
  });

  context('banner width text', () => {
    it('renders width text', () => {
      const { container } = renderCustomSize();

      expect(container).not.toBeNull();
    });
  });

  it('width size change event', () => {
    const { getByPlaceholderText } = renderCustomSize();
    const target = getByPlaceholderText('Banner Width');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '300' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
