import React from 'react';

import { render } from '@testing-library/react';

import ContentLayer from './ContentLayer';

describe('ContentLayer', () => {
  const contentFontColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  };

  function renderContentLayer({
    content,
    fontSize,
    fontFamily,
    fontColor = contentFontColor,
    width,
    height,
  } = {}) {
    return render((
      <ContentLayer
        content={content}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontColor={fontColor}
        width={width}
        height={height}
      />
    ));
  }

  it('renders "ContentLayer" component', () => {
    const { container } = renderContentLayer();

    expect(container).not.toBeNull();
  });
});
