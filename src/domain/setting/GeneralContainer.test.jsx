import React from 'react';

import { render } from '@testing-library/react';

import GeneralContainer from './GeneralContainer';

describe('GeneralContainer', () => {
  it('renders app title', () => {
    const { container } = render(<GeneralContainer />);

    expect(container).toHaveTextContent(/General/);
  });
});
