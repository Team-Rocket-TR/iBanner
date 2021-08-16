import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Complete from './Complete';

const handleClick = jest.fn();

describe('Complete component', () => {
  const renderDownload = () => render((
    <Complete
      onClick={handleClick}
    />
  ));

  it('renders "Complete" component', () => {
    const { container } = renderDownload();

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent(/완료/);
  });

  it('clicks "완료" button', () => {
    const { getByText } = renderDownload();

    const downloadButton = getByText('완료');

    fireEvent.click(downloadButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
