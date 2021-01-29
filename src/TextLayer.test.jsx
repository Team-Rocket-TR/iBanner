import React from 'react';

import { render } from '@testing-library/react';

import TextLayer from './TextLayer';

describe('TextLayer', () => {
  function renderPreview({
    backgroundImage = '',
  } = {}) {
    return render((
      <TextLayer
        backgroundImage={backgroundImage}
      />
    ));
  }

  it('renders "TextLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
