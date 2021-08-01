import React from 'react';

import { render } from '@testing-library/react';

import BannerCustom from './BannerCustom';

describe('BannerCustom', () => {
  const inputs = [
    {
      name: 'width',
      placeholder: 'Banner Width',
    },
    {
      name: 'height',
      placeholder: 'Banner Height',
    },
  ];
  const handleChange = jest.fn();

  function renderInput({
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <BannerCustom width={width} height={height} onChange={handleChange} />
    ));
  }

  it('renders two inputs', () => {
    const { getByPlaceholderText } = renderInput();

    inputs.map(({ placeholder }) => {
      expect(getByPlaceholderText(placeholder)).not.toBeNull();
      return null;
    });
  });
});
