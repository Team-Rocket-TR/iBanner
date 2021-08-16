import React from 'react';

import { render } from '@testing-library/react';

import TextLayer from './TextLayer';

describe('TextLayer', () => {
  const contentFontColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  };

  function renderTextLayer({
    content,
    fontSize,
    fontFamily,
    fontColor = contentFontColor,
    width,
    height,
  } = {}) {
    return render((
      <TextLayer
        content={content}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontColor={fontColor}
        width={width}
        height={height}
      />
    ));
  }

  it('renders "TextLayer" component', () => {
    const { container } = renderTextLayer();

    expect(container).not.toBeNull();
  });
});
