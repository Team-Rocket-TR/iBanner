import React from 'react';

import { render } from '@testing-library/react';

import ImageLayer from './ImageLayer';

describe('ImageLayer', () => {
  function renderPreview({
    backgroundImage = '',
  } = {}) {
    return render((
      <ImageLayer
        backgroundImage={backgroundImage}
      />
    ));
  }

  it('renders "ImageLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
