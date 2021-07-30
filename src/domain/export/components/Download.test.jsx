import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Download from './Download';

const handleClick = jest.fn();

describe('Download component', () => {
  const renderDownload = () => render((
    <Download
      onClick={handleClick}
    />
  ));

  it('renders "Download" component', () => {
    const { container } = renderDownload();

    expect(container).not.toBeNull();
    expect(container).toHaveTextContent(/다운로드/);
  });

  it('clicks "다운로드" button', () => {
    const { getByText } = renderDownload();

    const downloadButton = getByText('다운로드');

    fireEvent.click(downloadButton);

    expect(handleClick).toBeCalledTimes(1);
  });
});
