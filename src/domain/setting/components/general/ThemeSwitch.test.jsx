import React from 'react';

import { render } from '@testing-library/react';

import ThemeSwitch from './ThemeSwitch';

describe('ThemeSwitch component', () => {
  const handleChange = jest.fn();

  function renderSwitch({
    checked,
  } = {}) {
    return render((
      <ThemeSwitch checked={checked} onChange={handleChange} />
    ));
  }

  it('renders switch', () => {
    const { container } = renderSwitch(<ThemeSwitch />);

    expect(container).not.toBeNull();
  });
});
