import React, { useRef, useEffect } from 'react';

import { Text, Transformer } from 'react-konva';

export default function Content({
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

  function handleClick(id) {
    onSelect(id);
  }

  useEffect(() => {
    if (!isSelected) {
      return;
    }

    const contentCanvas = textRef.current;
    if (isCentered) {
      console.log(contentCanvas.x(), contentCanvas.y());
    }

    const transformerCanvas = transformerRef.current;
    transformerCanvas.nodes([contentCanvas]);
    transformerCanvas.getLayer().batchDraw();
  });

  return (
    <>
      <Text
        ref={textRef}
        text={content || '제목을 입력해주세요!'}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={`rgba(${r},${g},${b},${a})`}
        align="center"
        verticalAlign="middle"
        wrap="none"
        draggable
        onClick={() => handleClick(1)}
        onTap={() => handleClick(1)}
        onDragStart={() => handleClick(1)}
        onTouchStart={() => handleClick(1)}
        onDragEnd={(e) => {
          // onChange({
          //   ...shapeProps,
          //   x: e.target.x(),
          //   y: e.target.y(),
          // });
          console.log('On Drag End', e);
        }}
        onTransformEnd={(e) => {
          const node = textRef.current;
          node.scaleX(1);
          node.scaleY(1);
          console.log('On Transform End', e);
        }}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef}
          padding={5}
          enabledAnchors={[]}
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

export const MemoizedContent = React.memo(Content);
