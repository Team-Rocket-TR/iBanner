import React from 'react';

import { render } from '@testing-library/react';

import FilterLayer from './FilterLayer';

describe('FilterLayer', () => {
  const backgroundColor = {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  };

  function renderFilterLayer({
    fill = backgroundColor,
    width = 500,
    height = 500,
  } = {}) {
    return render((
      <FilterLayer
        fill={fill}
        width={width}
        height={height}
      />
    ));
  }

  it('renders "FilterLayer" component', () => {
    const { container } = renderFilterLayer();

    expect(container).not.toBeNull();
  });
});
