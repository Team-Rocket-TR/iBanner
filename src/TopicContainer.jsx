import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Topic from './Topic';

import { setTopic } from './slice';

const TopicContainer = () => {
  const dispatch = useDispatch();

  const topic = useSelector((state) => state.topic);

  const handleChange = ({ value }) => {
    dispatch(setTopic(value));
  };

  return (
    <>
      <h3>Topic</h3>
      <Topic
        topic={topic}
        onChange={handleChange}
      />
    </>
  );
};

export default TopicContainer;
