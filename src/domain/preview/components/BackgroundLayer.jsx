import React, { useEffect } from 'react';

import Layer from 'components/layer/Layer';

export default function BackgroundLayer({
  color,
  onDraw,
}) {
  useEffect(() => {
    onDraw();
  });

  const style = {
    backgroundColor: `${color}`,
    backgroundPosition: 'center',
  };

  return (
    <Layer style={style} />
  );
}

export const MemoizedBackgroundLayer = React.memo(BackgroundLayer);
