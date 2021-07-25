import React from 'react';

import {
  Stage,
  Layer,
  Text,
} from 'react-konva';

import { MemoizedImageLayer } from './image-layer/ImageLayer';
import { MemoizedBackgroundLayer } from './background-layer/BackgroundLayer';

const PreviewKonva = ({
  canvasRef,
  width,
  height,
  backgroundImage,
  backgroundColor,
  content,
  fontColor: {
    r: fr, g: fg, b: fb, a: fa,
  } = {},
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
    <Layer>
      <Text
        width={width}
        height={height}
        text={content || '제목을 입력해주세요!'}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={`rgba(${fr},${fg},${fb},${fa})`}
        align="center"
        verticalAlign="middle"
        wrap="none"
      />
    </Layer>
  </Stage>
);

export default PreviewKonva;
