import React from 'react';

import { render } from '@testing-library/react';

import ExportContainer from './ExportContainer';

describe('ExportContainer', () => {
  it('renders "ExportContainer" component', () => {
    const { container } = render(<ExportContainer />);

    expect(container).not.toBeNull();
  });
});
