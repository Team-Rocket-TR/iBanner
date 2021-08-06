import React from 'react';

import { Layer, Line } from 'react-konva';

export default function HelperContentLayer({
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

export const MemoizedHelperContentLayer = React.memo(HelperContentLayer);
