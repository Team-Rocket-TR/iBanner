import React from 'react';

import { render } from '@testing-library/react';

import BackgroundLayer from './BackgroundLayer';

describe('BackgroundLayer', () => {
  const backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  };

  function renderPreview({
    fill = backgroundColor,
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <BackgroundLayer
        fill={fill}
        width={width}
        height={height}
      />
    ));
  }

  it('renders "BackgroundLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
