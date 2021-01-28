import React from 'react';

import { render } from '@testing-library/react';

import PreviewText from './PreviewText';

describe('PreviewText', () => {
  function renderPreview({
    width = '500',
    height = '500',
    content = '#333',
    fontSize = '24',
    fontColor = '#fff',
  } = {}) {
    return render((
      <PreviewText
        width={width}
        height={height}
        content={content}
        fontSize={fontSize}
        fontColor={fontColor}
      />
    ));
  }

  it('renders "PreviewText" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
