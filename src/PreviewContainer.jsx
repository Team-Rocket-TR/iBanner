import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Preview from './Preview';
import { setCanvasRef } from './slice';

const PreviewContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const color = useSelector((state) => state.color);

  const content = useSelector((state) => state.content);
  const fontColor = useSelector((state) => state.fontColor);

  function handleDraw(canvas) {
    canvas.toBlob((blob) => {
      const localURL = window.URL.createObjectURL(blob);
      dispatch(setCanvasRef(localURL));
    }, 'image/png', 1.0);
  }

  return (
    <Preview
      width={width}
      height={height}
      color={color}
      content={content}
      fontColor={fontColor}
      onDraw={handleDraw}
    />
  );
};

export default PreviewContainer;
