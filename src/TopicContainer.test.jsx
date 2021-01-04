import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import TopicContainer from './TopicContainer';

describe('Topic component', () => {
  const dispatch = jest.fn();

  function renderTopicContainer() {
    return render(<TopicContainer />);
  }
  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      topic: '',
    }));
  });

  it('renders component title', () => {
    const { container } = renderTopicContainer();

    expect(container).toHaveTextContent('Topic');
  });

  it('listens change events', () => {
    const { getByLabelText } = renderTopicContainer();

    const topic = '아무거나 입력하기';

    fireEvent.change(getByLabelText('topic'), { target: { value: topic } });

    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'application/setTopic',
      payload: topic,
    });
  });
});
