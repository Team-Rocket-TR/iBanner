import React from 'react';

import { useSelector } from 'react-redux';

import Preview from './Preview';

const PreviewContainer = () => {
  const color = useSelector((state) => state.color);
  const topic = useSelector((state) => state.topic);

  return (
    <Preview
      color={color}
      topic={topic}
    />
  );
};

export default PreviewContainer;
