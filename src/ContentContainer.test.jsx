import React from 'react';

import { render } from '@testing-library/react';

import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  it('renders component named "ContentContainer"', () => {
    const { container } = render(<ContentContainer />);

    expect(container).not.toBeNull();
  });
});
