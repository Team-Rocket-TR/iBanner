import React from 'react';

import { useSelector } from 'react-redux';

import Preview from './Preview';

const PreviewContainer = () => {
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const color = useSelector((state) => state.backgroundColor);

  const content = useSelector((state) => state.content);
  const fontColor = useSelector((state) => state.fontColor);

  return (
    <Preview
      width={width}
      height={height}
      color={color}
      content={content}
      fontColor={fontColor}
    />
  );
};

export default PreviewContainer;
