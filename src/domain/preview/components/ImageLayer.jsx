import React, { useEffect } from 'react';

import Layer from 'components/layer/Layer';

export default function ImageLayer({
  backgroundImage,
  onDraw,
}) {
  useEffect(() => {
    onDraw();
  });

  const style = {
    background: `url(${backgroundImage})`,
    backgroundPosition: 'center',
  };

  return (
    <Layer style={style} />
  );
}

export const MemoizedImageLayer = React.memo(ImageLayer);
