import React from 'react';

import { useSelector } from 'react-redux';

import { MemoizedTextLayer } from './components';

const TextLayerContainer = ({ onDraw }) => {
  const content = useSelector((state) => state.content);
  const fontFamily = useSelector((state) => state.fontFamily);
  const fontSize = useSelector((state) => state.fontSize);
  const fontColor = useSelector((state) => state.fontColor);

  return (
    <>
      <MemoizedTextLayer
        content={content}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontColor={fontColor}
        onDraw={onDraw}
      />
    </>
  );
};

export default TextLayerContainer;
