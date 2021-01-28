import React from 'react';

import { render } from '@testing-library/react';

import PreviewImage from './PreviewImage';

describe('PreviewImage', () => {
  function renderPreview({
    width = '500',
    height = '500',
    backgroundImage = '',
  } = {}) {
    return render((
      <PreviewImage
        width={width}
        height={height}
        backgroundImage={backgroundImage}
      />
    ));
  }

  it('renders "PreviewImage" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
