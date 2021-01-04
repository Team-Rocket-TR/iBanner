import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Topic from './Topic';

describe('Topic component', () => {
  const handleChange = jest.fn();

  function renderTopic(topic = '') {
    return render((
      <Topic
        topic={topic}
        onChange={handleChange}
      />
    ));
  }

  context('with topic', () => {
    it('renders topic text', () => {
      const topic = '아무거나 적자';

      const { container } = renderTopic(topic);

      expect(container).toHaveTextContent(topic);
    });
  });

  context('without topic', () => {
    it('renders message, recommend topic write', () => {
      const { container } = renderTopic();

      expect(container).toHaveTextContent(/배너의 제목을 입력해주세요/);
    });
  });

  it("renders input entered banner's topic", () => {
    const { getByLabelText } = renderTopic();

    expect(getByLabelText('topic')).not.toBeNull();
  });

  it('listens topic change event', () => {
    const { getByLabelText } = renderTopic();

    const target = getByLabelText('topic');

    expect(target).not.toBeNull();

    fireEvent.change(target, { target: { value: '아무거나 적자' } });

    expect(handleChange).toBeCalledTimes(1);
  });
});
