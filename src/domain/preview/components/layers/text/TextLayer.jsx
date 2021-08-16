import React from 'react';

import { Layer } from 'react-konva';

import CustomText from './CustomText';

export default function TextLayer({
  texts,
  selectedTextId,
  onSelect,
}) {
  function handleSelectContent(id) {
    onSelect(id);
  }

  return (
    <Layer>
      {texts.map(({
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
          isSelected={id === selectedTextId}
          onSelect={() => handleSelectContent(id)}
        />
      ))}
    </Layer>
  );
}

export const MemoizedTextLayer = React.memo(TextLayer);
