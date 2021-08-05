import React from 'react';

import { Layer } from 'react-konva';

import Content from './Content';

export default function ContentLayer({
  contents,
  selectedContentId,
  onSelect,
}) {
  function handleSelectContent(id) {
    onSelect(id);
  }

  return (
    <Layer>
      {contents.map(({
        id,
        content,
        fontFamily,
        fontSize,
        fontColor,
        position,
      }) => (
        <Content
          key={id}
          id={id}
          content={content}
          fontFamily={fontFamily}
          fontSize={fontSize}
          fontColor={fontColor}
          isCentered={position === 'center'}
          isSelected={id === selectedContentId}
          onSelect={() => handleSelectContent(id)}
        />
      ))}
    </Layer>
  );
}

export const MemoizedContentLayer = React.memo(ContentLayer);
