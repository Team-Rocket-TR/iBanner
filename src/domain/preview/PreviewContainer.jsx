import React from 'react';

import { useSelector } from 'react-redux';

import { PreviewFabric } from './components';

const PreviewContainer = ({ canvasRef }) => {
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const backgroundImage = useSelector((state) => state.backgroundImage);

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const content = useSelector((state) => state.content);
  const fontColor = useSelector((state) => state.fontColor);
  const fontSize = useSelector((state) => state.fontSize);
  const fontFamily = useSelector((state) => state.fontFamily);

  return (
    <PreviewFabric
      canvasRef={canvasRef}
      width={width}
      height={height}
      backgroundImage={backgroundImage}
      backgroundColor={backgroundColor}
      content={content}
      fontColor={fontColor}
      fontSize={fontSize}
      fontFamily={fontFamily}
    />
  );
};

export default PreviewContainer;
