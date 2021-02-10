import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setCanvasRef } from 'slice';

import Preview from './components/Preview';

const PreviewContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const backgroundImage = useSelector((state) => state.backgroundImage);

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const content = useSelector((state) => state.content);
  const fontSize = useSelector((state) => state.fontSize);
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
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      content={content}
      fontSize={fontSize}
      fontColor={fontColor}
      onDraw={handleDraw}
    />
  );
};

export default PreviewContainer;
