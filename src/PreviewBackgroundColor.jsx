import React from 'react';

import Layer from './component/Layer';

const PreviewBackgroundColor = ({
  width,
  height,
  color,
  onDraw,
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color}`,
  };

  return (
    <Layer
      style={style}
      onLoad={onDraw}
    />
  );
};

export default PreviewBackgroundColor;
