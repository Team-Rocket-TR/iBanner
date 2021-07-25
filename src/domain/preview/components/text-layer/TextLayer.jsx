import React from 'react';

import { Layer, Text } from 'react-konva';

export default function TextLayer({
  content,
  fontSize,
  fontFamily,
  fontColor = {},
  width,
  height,
}) {
  const {
    r, g, b, a,
  } = fontColor;

  return (
    <Layer>
      <Text
        text={content || '제목을 입력해주세요!'}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={`rgba(${r},${g},${b},${a})`}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
        wrap="none"
      />
    </Layer>
  );
}

export const MemoizedTextLayer = React.memo(TextLayer);
