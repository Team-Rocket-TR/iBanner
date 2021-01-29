import React, { useEffect } from 'react';

import Layer from './component/Layer';

export default function TextLayer({
  content,
  fontSize,
  fontColor,
  onDraw,
}) {
  useEffect(() => {
    onDraw();
  });

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: `${fontSize}px`,
    color: `${fontColor}`,
  };

  return (
    <Layer style={style}>
      {content || '제목을 입력해주세요!'}
    </Layer>
  );
}

export const MemoizedTextLayer = React.memo(TextLayer);
