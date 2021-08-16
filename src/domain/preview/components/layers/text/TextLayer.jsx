import React from 'react';

import { Layer } from 'react-konva';

import CustomText from './CustomText';

export default function TextLayer({
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
        <CustomText
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

export const MemoizedTextLayer = React.memo(TextLayer);
