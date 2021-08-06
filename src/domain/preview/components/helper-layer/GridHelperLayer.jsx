import React from 'react';

import { Layer } from 'react-konva';

import GridLine from './GridLine';

export default function GridHelperLayer({
  width,
  height,
  blockSnapSize = 30,
}) {
  const padding = blockSnapSize;

  const rowCount = Math.ceil(width / padding);
  const colCount = Math.ceil(height / padding);

  return (
    <Layer>
      {/* 가로 줄 */}
      {/* 세로 줄 */}
    </Layer>
  );
}

export const MemoizedGridHelperLayer = React.memo(GridHelperLayer);
