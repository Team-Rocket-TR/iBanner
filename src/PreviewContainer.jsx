import React from 'react';

import { useSelector } from 'react-redux';

import Preview from './Preview';

const PreviewContainer = () => {
  const color = useSelector((state) => state.color);
  const content = useSelector((state) => state.content);

  return (
    <Preview
      color={color}
      content={content}
    />
  );
};

export default PreviewContainer;
