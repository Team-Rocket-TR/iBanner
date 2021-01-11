import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Content from './Content';

describe('Content component', () => {
  const handleChange = jest.fn();

  function renderTopic() {
    return render((
      <Content onChange={handleChange} />
    ));
  }

  context('with content', () => {
    it('renders content text', () => {
      const { container } = renderTopic();

      expect(container).not.toBeNull();
    });
  });

  context('without content', () => {
    it('renders message, recommend content write', () => {
      const { container } = renderTopic();

      expect(container).toHaveTextContent(/제목을 입력해주세요/);
    });
  });

  it("renders input entered banner's content", () => {
    const { getByLabelText } = renderTopic();

    expect(getByLabelText('content')).not.toBeNull();
  });

  it('listens content change event', () => {
    const { getByLabelText } = renderTopic();

    const target = getByLabelText('content');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '아무거나 적자' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
