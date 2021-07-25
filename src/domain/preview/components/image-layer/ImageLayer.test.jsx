import React from 'react';

import { render } from '@testing-library/react';

import ImageLayer from './ImageLayer';

describe('BackgroundLayer', () => {
  const imageUri = 'https://IMAGE_URL.com/';

  function renderPreview({
    backgroundImage = imageUri,
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <ImageLayer
        backgroundImage={backgroundImage}
        width={width}
        height={height}
      />
    ));
  }

  it('renders "ImageLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
