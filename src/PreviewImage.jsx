import React, { useEffect } from 'react';

import Layer from './component/Layer';

const PreviewImage = ({
  width,
  height,
  backgroundImage,
  onDraw,
}) => {
  useEffect(() => {
    onDraw();
  });

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    background: `url(${backgroundImage})`,
    backgroundPosition: 'center',
  };

  return (
    <Layer style={style} />
  );
};

export default PreviewImage;
