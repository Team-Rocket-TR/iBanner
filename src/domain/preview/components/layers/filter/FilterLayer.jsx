import React from 'react';

import { Layer, Rect } from 'react-konva';

// 배경색은 아니지만 이미지와 텍스트 사이의 무엇가의 효과를 집어넣을 수 있는 영역
export default function FilterLayer({
  fill,
  width,
  height,
}) {
  const {
    r, g, b, a,
  } = fill;

  return (
    <Layer>
      <Rect
        width={width}
        height={height}
        fill={`rgba(${r},${g},${b},${a})`}
        stroke="#777"
        strokeWidth={1}
      />
    </Layer>
  );
}

export const MemoizedFilterLayer = React.memo(FilterLayer);
