import React from 'react';

import { render } from '@testing-library/react';

import SettingContainer from './SettingContainer';

describe('SettingContainer', () => {
  it('renders title by settings', () => {
    const { container } = render(<SettingContainer />);

    expect(container).toHaveTextContent('Background Color');
    expect(container).toHaveTextContent('Text Color');
  });
});
