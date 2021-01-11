import React from 'react';

import { useSelector } from 'react-redux';

import Preview from './Preview';

const PreviewContainer = () => {
  const color = useSelector((state) => state.color);
  const content = useSelector((state) => state.content);
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  return (
    <Preview
      color={color}
      content={content}
      width={width}
      height={height}
    />
  );
};

export default PreviewContainer;
