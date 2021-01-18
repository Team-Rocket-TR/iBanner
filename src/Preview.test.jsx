import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import Preview from './Preview';

describe('Preview', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);
  });

  function renderPreview({
    width = '500',
    height = '500',
    color = 'gray',
    content = '',
    fontColor = 'white',
  } = {}) {
    return render((
      <Preview
        width={width}
        height={height}
        color={color}
        content={content}
        fontColor={fontColor}
        onDraw={dispatch}
      />
    ));
  }

  it('renders "Preview" component', () => {
    const { container } = renderPreview();

    expect(container).not.toBeNull();
  });

  it('draws canvas and occurs dispatch event', () => {
    const wh = { width: '500', height: '500' };

    const { container } = renderPreview({ ...wh });

    const canvasHTML = `<canvas width="${wh.width}" height="${wh.height}"></canvas>`;

    expect(container).toContainHTML(canvasHTML);

    expect(dispatch).toBeCalledTimes(1);
  });
});
