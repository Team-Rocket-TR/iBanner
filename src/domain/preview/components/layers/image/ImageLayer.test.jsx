import React from 'react';

import { render } from '@testing-library/react';

import ImageLayer from './ImageLayer';

describe('BackgroundLayer', () => {
  const imageUri = 'https://IMAGE_URL.com/';

  function renderPreview({
    imageUrl = imageUri,
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <ImageLayer
        imageUrl={imageUrl}
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
