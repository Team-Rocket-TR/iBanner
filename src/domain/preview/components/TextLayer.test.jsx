import React from 'react';

import { render } from '@testing-library/react';

import TextLayer from './TextLayer';

const onDraw = jest.fn();

describe('TextLayer', () => {
  function renderPreview({
    content = '',
    fontSize = '',
    fontColor = '',
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
