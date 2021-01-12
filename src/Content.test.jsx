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

  context('with content', () => {
    it('renders content text', () => {
      const { container } = renderContent();

      expect(container).not.toBeNull();
    });
  });

  context('without content', () => {
    it('renders message, recommend content write', () => {
      const { getByPlaceholderText } = renderContent();

      expect(getByPlaceholderText(/banner content/)).not.toBeNull();
    });
  });

  it("renders input entered banner's content", () => {
    const { getByLabelText } = renderContent();

    expect(getByLabelText('Content')).not.toBeNull();
  });

  it('listens content change event', () => {
    const { getByLabelText } = renderContent();

    const target = getByLabelText('Content');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '아무거나 적자' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
