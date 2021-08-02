import React from 'react';

import { Text, Transformer } from 'react-konva';

export default function Content({
  content,
  fontSize,
  fontFamily,
  fontColor = {},
  width,
  height,
  isSelected,
  onSelect,
}) {
  const {
    r, g, b, a,
  } = fontColor;

  const textRef = React.useRef();
  const transformerRef = React.useRef();

  function handleClick(id) {
    onSelect(id);
  }

  React.useEffect(() => {
    if (isSelected) {
      console.log(transformerRef.current);
      console.log(textRef.current);
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  });

  return (
    <>
      <Text
        ref={textRef}
        text={content || '제목을 입력해주세요!'}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fill={`rgba(${r},${g},${b},${a})`}
        width={width}
        height={height}
        align="center"
        verticalAlign="middle"
        wrap="none"
        draggable
        onClick={() => handleClick(1)}
        onTap={() => handleClick(1)}
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
          // const scaleX = node.scaleX();
          // const scaleY = node.scaleY();

          node.scaleX(1);
          node.scaleY(1);
          // onChange({
          //   ...shapeProps,
          //   x: node.x(),
          //   y: node.y(),

          //   width: Math.max(5, node.width() * scaleX),
          //   height: Math.max(node.height() * scaleY),
          // });
          console.log('On Transform End', e);
        }}
      />
      {isSelected && (
        <Transformer
          ref={transformerRef}
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
