import React from 'react';

import Layer from './component/Layer';

const PreviewImage = ({
  width,
  height,
  backgroundImage,
  onDraw,
}) => {
  const style = {
    width: `${width}px`,
    height: `${height}px`,
    background: `url(${backgroundImage})`,
    backgroundPosition: 'center',
  };

  return (
    <Layer
      style={style}
      onLoad={onDraw}
    />
  );
};

export default PreviewImage;
