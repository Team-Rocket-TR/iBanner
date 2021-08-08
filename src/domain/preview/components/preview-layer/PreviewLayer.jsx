import React from 'react';

import { Layer, Rect } from 'react-konva';

export default function PreviewLayer({
  color,
  width,
  height,
}) {
  return (
    <Layer>
      <Rect fill={color} width={width} height={height} />
    </Layer>
  );
}

export const MemoizedPreviewLayer = React.memo(PreviewLayer);
