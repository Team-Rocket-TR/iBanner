import React from 'react';

import { render } from '@testing-library/react';

import AppHeader from './AppHeader';

describe('AppHeader', () => {
  it('renders app title', () => {
    const { container } = render(<AppHeader />);

    expect(container).toHaveTextContent(/Banner\+/);
    expect(container).toHaveTextContent(/Settings/);
  });
});
