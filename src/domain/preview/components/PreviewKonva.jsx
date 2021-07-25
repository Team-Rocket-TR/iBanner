import React from 'react';

import {
  Stage,
  Layer,
  Rect,
  Text,
} from 'react-konva';

import { MemoizedBackgroundLayer } from './background-layer/BackgroundLayer';

const PreviewKonva = ({
  canvasRef,
  width,
  height,
  backgroundImage,
  backgroundColor: {
    r: br, g: bg, b: bb, a: ba,
  } = {},
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
    <MemoizedBackgroundLayer
      backgroundImage={backgroundImage}
      width={500}
      height={500}
    />
    <Layer>
      <Rect
        width={width}
        height={height}
        fill={`rgba(${br},${bg},${bb},${ba})`}
        shadowBlur={5}
        stroke="#777"
        strokeWidth={1}
      />
    </Layer>
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
