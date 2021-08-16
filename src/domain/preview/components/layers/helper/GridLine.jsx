import React from 'react';

import { Line } from 'react-konva';

export default function GridLine({
  points,
  stroke = '#ddd',
  strokeWidth = 1,
  dash = [5, 2],
}) {
  return (
    <Line
      points={points}
      stroke={stroke}
      strokeWidth={strokeWidth}
      dash={dash}
    />
  );
}

export const MemoizedGridLine = React.memo(GridLine);
