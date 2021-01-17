import React from 'react';

import { render } from '@testing-library/react';

import ExportContainer from './ExportContainer';

describe('ExportContainer', () => {
  it('renders component named "ExportContainer"', () => {
    const { container } = render(<ExportContainer />);

    expect(container).not.toBeNull();
  });
});
