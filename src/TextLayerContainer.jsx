import React from 'react';

import { useSelector } from 'react-redux';

import { MemoizedTextLayer } from './TextLayer';

const TextLayerContainer = ({ onDraw }) => {
  const content = useSelector((state) => state.content);
  const fontSize = useSelector((state) => state.fontSize);
  const fontColor = useSelector((state) => state.fontColor);

  return (
    <>
      <MemoizedTextLayer
        content={content}
        fontSize={fontSize}
        fontColor={fontColor}
        onDraw={onDraw}
      />
    </>
  );
};

export default TextLayerContainer;
