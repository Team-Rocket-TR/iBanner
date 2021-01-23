import React from 'react';

import { render } from '@testing-library/react';

import Download from './Download';

describe('Download', () => {
  it('renders "Download" component', () => {
    const { container } = render(<Download />);

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent(/Download/);
  });
});
