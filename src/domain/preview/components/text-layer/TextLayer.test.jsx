import React from 'react';

import { render } from '@testing-library/react';

import TextLayer from './TextLayer';

const onDraw = jest.fn();

describe('TextLayer', () => {
  function renderPreview({
    content = '',
    fontSize = '',
    fontColor = {
      r: 255, g: 255, b: 255, a: 1,
    },
  } = {}) {
    return render((
      <TextLayer
        content={content}
        fontSize={fontSize}
        fontColor={fontColor}
        onDraw={onDraw}
      />
    ));
  }

  it('renders "TextLayer" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });
});
