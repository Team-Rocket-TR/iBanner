import React, { useRef, useEffect } from 'react';

import { Text, Transformer } from 'react-konva';

export default function CustomText({
  id,
  content,
  fontSize,
  fontFamily,
  fontColor = {},
  isCentered,
  isSelected,
  onSelect,
}) {
  const {
    r, g, b, a,
  } = fontColor;

  const textRef = useRef();
  const transformerRef = useRef();

  useEffect(() => {
    if (!isSelected) {
      return;
    }

    const contentCanvas = textRef.current;
    const parentLayer = contentCanvas.getLayer();

    if (isCentered) {
      const boundaryX = parentLayer.width();
      const boundaryY = parentLayer.height();

      contentCanvas.x(boundaryX / 2);
      contentCanvas.y(boundaryY / 2);

      contentCanvas.offsetX(contentCanvas.width() / 2);
      contentCanvas.offsetY(contentCanvas.height() / 2);

      parentLayer.batchDraw();
    }

    const transformerCanvas = transformerRef.current;
    transformerCanvas.nodes([contentCanvas]);
    transformerCanvas.getLayer().batchDraw();
  });

  function handleClick(event) {
    onSelect(id);
    event.preventDefault();
  }

  function handleMouseEnter() {
    if (isCentered) {
      document.body.style.cursor = 'pointer';
      return;
    }
    document.body.style.cursor = 'grab';
  }

  function handleMouseLeave() {
    document.body.style.cursor = 'default';
  }

  function handleDragStart() {
    document.body.style.cursor = 'grabbing';
    onSelect(id);
  }

  function handleDragEnd() {
    document.body.style.cursor = 'grabbing';
  }

  return (
    <>
      <Text
        ref={textRef}
        text={content || '제목을 입력해주세요!'}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={`rgba(${r},${g},${b},${a})`}
        verticalAlign="middle"
        align="center"
        wrap="none"
        draggable={!isCentered}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        onTap={handleClick}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef}
          padding={5}
          resizeEnabled={false}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
}

export const MemoizedCustomText = React.memo(CustomText);
