import React from 'react';

import { render } from '@testing-library/react';

import TextContainer from './TextContainer';

describe('TextContainer', () => {
  it('renders component named "TextContainer"', () => {
    const { container } = render(<TextContainer />);

    expect(container).not.toBeNull();
  });
});
