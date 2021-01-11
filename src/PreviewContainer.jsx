import React from 'react';

import { useSelector } from 'react-redux';

import Preview from './Preview';

const PreviewContainer = () => {
  const color = useSelector((state) => state.color);
  const topic = useSelector((state) => state.topic);
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  return (
    <Preview
      color={color}
      topic={topic}
      selectedWidth={width}
      selectedHeight={height}
    />
  );
};

export default PreviewContainer;
