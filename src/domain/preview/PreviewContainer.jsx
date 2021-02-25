import React from 'react';

import { useSelector } from 'react-redux';

// import { setCanvasRef } from 'slice';

import PreviewFabric from './components/PreviewFabric';

const PreviewContainer = ({ canvasRef }) => {
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const backgroundImage = useSelector((state) => state.backgroundImage);

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const content = useSelector((state) => state.content);
  const fontSize = useSelector((state) => state.fontSize);
  const fontColor = useSelector((state) => state.fontColor);

  return (
    <PreviewFabric
      canvasRef={canvasRef}
      width={width}
      height={height}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      content={content}
      fontSize={fontSize}
      fontColor={fontColor}
    />
  );
};

export default PreviewContainer;
