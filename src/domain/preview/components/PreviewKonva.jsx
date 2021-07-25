import React from 'react';

import { Stage } from 'react-konva';

import { MemoizedImageLayer } from './image-layer/ImageLayer';
import { MemoizedBackgroundLayer } from './background-layer/BackgroundLayer';
import { MemoizedTextLayer } from './text-layer/TextLayer';

const PreviewKonva = ({
  canvasRef,
  width,
  height,
  backgroundImage,
  backgroundColor,
  content,
  fontColor,
  fontSize,
  fontFamily,
}) => (
  <Stage
    ref={canvasRef}
    width={width}
    height={height}
  >
    <MemoizedImageLayer
      backgroundImage={backgroundImage}
      width={500}
      height={500}
    />
    <MemoizedBackgroundLayer
      fill={backgroundColor}
      width={width}
      height={height}
    />
    <MemoizedTextLayer
      text={content}
      fontSize={fontSize}
      fontFamily={fontFamily}
      fontColor={fontColor}
      width={width}
      height={height}
    />
  </Stage>
);

export default PreviewKonva;
