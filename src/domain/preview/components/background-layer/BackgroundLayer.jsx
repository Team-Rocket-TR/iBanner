import React from 'react';

import { Layer, Rect } from 'react-konva';

export default function BackgroundLayer({
  fill,
  width,
  height,
}) {
  const {
    r, g, b, a,
  } = fill;

  return (
    <Layer>
      <Rect
        width={width}
        height={height}
        fill={`rgba(${r},${g},${b},${a})`}
        stroke="#777"
        strokeWidth={1}
      />
    </Layer>
  );
}

export const MemoizedBackgroundLayer = React.memo(BackgroundLayer);
