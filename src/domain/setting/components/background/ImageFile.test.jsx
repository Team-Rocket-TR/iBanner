import React from 'react';

import { render } from '@testing-library/react';

import ImageFile from './ImageFile';

describe('ImageFile', () => {
  const handleChange = jest.fn();

  it('renders "ImageFile" component', () => {
    const { container } = render(<ImageFile onChange={handleChange} />);

    expect(container).not.toBeNull();
    expect(container).toContainHTML('<input type="file"');
  });
});
