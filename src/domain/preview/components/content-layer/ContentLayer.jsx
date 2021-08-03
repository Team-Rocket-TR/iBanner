import React, { useState } from 'react';

import { Layer } from 'react-konva';

import Content from './Content';

export default function ContentLayer({
  contents,
}) {
  const [selectedContentId, selectContent] = useState(1);

  return (
    <Layer>
      {contents.map(({
        id,
        content,
        fontFamily,
        fontSize,
        fontColor,
      }) => (
        <Content
          content={content}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontColor={fontColor}
          isSelected={id === selectedContentId}
          onSelect={selectContent}
        />
      ))}
    </Layer>
  );
}

export const MemoizedContentLayer = React.memo(ContentLayer);
