import React from 'react';

import { render } from '@testing-library/react';

import Clipboard from './Clipboard';

describe('Clipboard', () => {
  it('renders "Clipboard" component', () => {
    const { container } = render(<Clipboard />);

    expect(container).not.toBeNull();
  });
});
