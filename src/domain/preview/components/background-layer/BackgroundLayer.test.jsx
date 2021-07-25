import React from 'react';

import { render } from '@testing-library/react';

import BackgroundLayer from './BackgroundLayer';

describe('BackgroundLayer', () => {
  const imageUri = 'https://IMAGE_URL.com/';

  function renderPreview({
    backgroundImage = imageUri,
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <BackgroundLayer
        backgroundImage={backgroundImage}
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
