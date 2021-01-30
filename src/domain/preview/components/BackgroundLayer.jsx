import React, { useEffect } from 'react';

import Layer from 'components/layer/Layer';

export default function BackgroundLayer({
  color: {
    r, g, b, a,
  },
  onDraw,
}) {
  useEffect(() => {
    onDraw();
  });

  const style = {
    backgroundColor: `rgb(${r}, ${g}, ${b}, ${a})`,
    backgroundPosition: 'center',
  };

  return (
    <Layer style={style} />
  );
}

export const MemoizedBackgroundLayer = React.memo(BackgroundLayer);
