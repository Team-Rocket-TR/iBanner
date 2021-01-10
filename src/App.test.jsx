import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders app title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent('Banner Maker');
  });
});
