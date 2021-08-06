import React from 'react';

import { Layer, Line } from 'react-konva';

export default function GridHelperLayer({
  width,
  height,
}) {
  const xLength = width;
  const yLength = height;
  const points = [];

  return (
    <Layer>
      {[].map(({
        id,
      }) => (
        <Line
          key={id}
          points={points}
        />
      ))}
    </Layer>
  );
}

export const MemoizedGridHelperLayer = React.memo(GridHelperLayer);
