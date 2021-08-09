import React from 'react';

import { Layer, Rect } from 'react-konva';

export default function PreviewLayer({
  color,
  width,
  height,
}) {
  const {
    r, g, b, a,
  } = color;

  return (
    <Layer>
      <Rect
        fill={`rgba(${r},${g},${b},${a})`}
        width={width}
        height={height}
      />
    </Layer>
  );
}

export const MemoizedPreviewLayer = React.memo(PreviewLayer);
