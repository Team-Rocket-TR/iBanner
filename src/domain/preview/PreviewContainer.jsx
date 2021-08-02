import React from 'react';

import { useSelector } from 'react-redux';

import { Stage } from 'react-konva';

import {
  MemoizedImageLayer,
  MemoizedBackgroundLayer,
  MemoizedContentLayer,
} from 'domain/preview/components';

const PreviewKonva = ({ canvasRef }) => {
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const {
    image,
    scale,
    sizeX,
    sizeY,
    alignX,
    alignY,
  } = useSelector((state) => state.imageLayer);

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const content = useSelector((state) => state.content);
  const fontColor = useSelector((state) => state.fontColor);
  const fontSize = useSelector((state) => state.fontSize);
  const fontFamily = useSelector((state) => state.fontFamily);

  return (
    <Stage
      ref={canvasRef}
      width={width}
      height={height}
    >
      <MemoizedImageLayer
        url={image}
        size={{ width: sizeX, height: sizeY }}
        scale={{ x: scale, y: scale }}
        align={{ x: alignX, y: alignY }}
        canvas={{ width, height }}
      />
      <MemoizedBackgroundLayer
        fill={backgroundColor}
        width={width}
        height={height}
      />
      <MemoizedContentLayer
        content={content}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontColor={fontColor}
        width={width}
        height={height}
      />
    </Stage>
  );
};

export default PreviewKonva;
