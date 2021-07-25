import React, { useEffect } from 'react';

import Layer from 'components/layer/Layer';

export default function TextLayer({
  content,
  fontFamily,
  fontSize,
  fontColor: {
    r, g, b, a,
  } = {},
  onDraw,
}) {
  useEffect(() => {
    onDraw();
  });

  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: `${fontFamily}`,
    fontSize: `${fontSize}px`,
    color: `rgb(${r}, ${g}, ${b}, ${a})`,
  };

  return (
    <Layer style={style}>
      {content || '제목을 입력해주세요!'}
    </Layer>
  );
}

export const MemoizedTextLayer = React.memo(TextLayer);
