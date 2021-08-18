import React from 'react';

import { Layer } from 'react-konva';

import GridLine from './GridLine';

export default function GridHelperLayer({
  width,
  height,
  blockSnapSize = 30,
}) {
  const padding = blockSnapSize;

  const rowCount = Math.ceil(height / padding);
  const colCount = Math.ceil(width / padding);

  const halfRowCount = Math.ceil(rowCount / 2);
  const halfColCount = Math.ceil(colCount / 2);

  return (
    <Layer>
      {/* 가로 줄 */}
      {Array.from(Array(halfRowCount), (e, i) => (
        <GridLine
          key={i}
          points={[
            0,
            Math.round(-i * padding) + height / 2,
            width,
            Math.round(-i * padding) + height / 2,
          ]}
          strokeWidth={0.5}
        />
      ))}
      {Array.from(Array(halfRowCount), (e, i) => (
        <GridLine
          key={i}
          points={[
            0,
            Math.round((i + 1) * padding) + height / 2,
            width,
            Math.round((i + 1) * padding) + height / 2,
          ]}
          strokeWidth={0.5}
        />
      ))}
      {/* 세로 줄 */}
      {Array.from(Array(halfColCount), (e, i) => (
        <GridLine
          key={i}
          points={[
            Math.round(-i * padding) + width / 2,
            0,
            Math.round(-i * padding) + width / 2,
            height,
          ]}
          strokeWidth={0.5}
        />
      ))}
      {Array.from(Array(halfColCount), (e, i) => (
        <GridLine
          key={i}
          points={[
            Math.round((i + 1) * padding) + width / 2,
            0,
            Math.round((i + 1) * padding) + width / 2,
            height,
          ]}
          strokeWidth={0.5}
        />
      ))}
    </Layer>
  );
}

export const MemoizedGridHelperLayer = React.memo(GridHelperLayer);
