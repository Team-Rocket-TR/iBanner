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
      {Array.from(Array(rowCount), (e, i) => (
        <GridLine
          key={i}
          points={[Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height]}
          strokeWidth={0.5}
        />
      ))}
      {/* 세로 줄 */}
      {Array.from(Array(colCount), (e, j) => (
        <GridLine
          key={j}
          points={[0, Math.round(j * padding), width, Math.round(j * padding)]}
          strokeWidth={0.5}
        />
      ))}
    </Layer>
  );
}

export const MemoizedGridHelperLayer = React.memo(GridHelperLayer);
