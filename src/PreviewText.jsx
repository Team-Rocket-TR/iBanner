import React, { useEffect } from 'react';

import Layer from './component/Layer';

const PreviewText = ({
  width,
  height,
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
  useEffect(() => {
    onDraw();
  });

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${width}px`,
    height: `${height}px`,
    fontSize: `${fontSize}px`,
    color: `${fontColor}`,
  };

  return (
    <Layer style={style}>
      {content || '제목을 입력해주세요!'}
    </Layer>
  );
};

export default PreviewText;
