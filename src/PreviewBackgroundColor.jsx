import React, { useEffect } from 'react';

import Layer from './component/Layer';

const PreviewBackgroundColor = ({
  width,
  height,
  color,
  onDraw,
}) => {
  useEffect(() => {
    onDraw();
  });

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color}`,
    backgroundPosition: 'center',
  };

  return (
    <Layer style={style} />
  );
};

export default PreviewBackgroundColor;
