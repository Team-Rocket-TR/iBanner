import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Content from './Content';

describe('Content component', () => {
  const handleChange = jest.fn();

  function renderContent() {
    return render((
      <Content onChange={handleChange} />
    ));
  }

  context('with title', () => {
    it('renders title text', () => {
      const { container } = renderContent();

      expect(container).not.toBeNull();
    });
  });

  context('without title', () => {
    it('renders message, recommend title write', () => {
      const { getByPlaceholderText } = renderContent();

      expect(getByPlaceholderText(/Title/)).not.toBeNull();
    });
  });

  it("renders input entered banner's title", () => {
    const { getByLabelText } = renderContent();

    expect(getByLabelText('Title')).not.toBeNull();
  });

  it('listens title change event', () => {
    const { getByLabelText } = renderContent();

    const target = getByLabelText('Title');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '아무거나 적자' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
