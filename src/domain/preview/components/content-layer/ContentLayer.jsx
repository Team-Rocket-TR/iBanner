import React, { useState } from 'react';

import { Layer } from 'react-konva';

import Content from './Content';

export default function ContentLayer({
  content,
  fontSize,
  fontFamily,
  fontColor,
  width,
  height,
}) {
  const [selectedContentId, selectContent] = useState(null);

  return (
    <Layer>
      <Content
        content={content}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontColor={fontColor}
        width={width}
        height={height}
        isSelected
        onSelect={selectContent}
      />
    </Layer>
  );
}

export const MemoizedContentLayer = React.memo(ContentLayer);
