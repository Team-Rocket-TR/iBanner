import React from 'react';

import { render } from '@testing-library/react';

import PreviewBackgroundColor from './PreviewBackgroundColor';

describe('PreviewBackgroundColor', () => {
  function renderPreview({
    width = '500',
    height = '500',
    color = '#333',
  } = {}) {
    return render((
      <PreviewBackgroundColor
        width={width}
        height={height}
        color={color}
      />
    ));
  }

  it('renders "PreviewBackgroundColor" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
