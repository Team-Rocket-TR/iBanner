import React from 'react';

import Layer from './component/Layer';

const PreviewText = ({
  width,
  height,
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
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
    <Layer
      style={style}
      onLoad={onDraw}
    >
      {content || '제목을 입력해주세요!'}
    </Layer>
  );
};

export default PreviewText;
