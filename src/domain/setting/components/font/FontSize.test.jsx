import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import FontSize from './FontSize';

describe('FontSize component', () => {
  const handleChange = jest.fn();

  function renderFontSize() {
    return render((
      <FontSize onChange={handleChange} />
    ));
  }

  context('with font size', () => {
    it('renders font size text', () => {
      const { container } = renderFontSize();

      expect(container).not.toBeNull();
    });
  });

  context('without font size', () => {
    it('renders message, recommend font size write', () => {
      const { getByPlaceholderText } = renderFontSize();

      expect(getByPlaceholderText(/Font size/)).not.toBeNull();
    });
  });

  it("renders input entered banner's font size", () => {
    const { getByLabelText } = renderFontSize();

    expect(getByLabelText('Font size')).not.toBeNull();
  });

  it('listens font size change event', () => {
    const { getByLabelText } = renderFontSize();

    const target = getByLabelText('Font size');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '18' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
