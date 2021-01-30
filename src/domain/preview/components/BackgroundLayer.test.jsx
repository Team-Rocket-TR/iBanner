import React from 'react';

import { render } from '@testing-library/react';

import BackgroundLayer from './BackgroundLayer';

describe('BackgroundLayer', () => {
  function renderPreview({
    color = '#333',
  } = {}) {
    return render((
      <BackgroundLayer
        color={color}
      />
    ));
  }

  it('renders "BackgroundLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
