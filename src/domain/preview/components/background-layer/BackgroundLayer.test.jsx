import React from 'react';

import { render } from '@testing-library/react';

import BackgroundLayer from './BackgroundLayer';

const onDraw = jest.fn();

describe('BackgroundLayer', () => {
  const rgba = {
    r: 0, g: 0, b: 0, a: 1,
  };

  function renderPreview({
    color = rgba,
  } = {}) {
    return render((
      <BackgroundLayer
        color={color}
        onDraw={onDraw}
      />
    ));
  }

  it('renders "BackgroundLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
