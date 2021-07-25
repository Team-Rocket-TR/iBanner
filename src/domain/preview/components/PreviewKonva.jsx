import React, { useState, useEffect } from 'react';

// import styled from 'styled-components';

import useImage from 'use-image';

import {
  Stage,
  Layer,
  Star,
  Image,
  Text,
  Rect,
} from 'react-konva';

// const Canvas = styled.canvas`
//   border: 1px dashed;
// `;

function generateShapes() {
  return [...Array(10)].map((_, i) => ({
    id: i.toString(),
    x: Math.random() * 500,
    y: Math.random() * 500,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

const PreviewKonva = ({
  canvasRef,
  width,
  height,
  backgroundImage,
  backgroundColor: {
    r: br, g: bg, b: bb, a: ba,
  } = {},
  content,
  fontColor: {
    r: fr, g: fg, b: fb, a: fa,
  } = {},
  fontSize,
  fontFamily,
}) => {
  const [stars, setStars] = useState(INITIAL_STATE);

  const [image] = useImage(backgroundImage);

  useEffect(() => {
    // setSize({
    //   width: 500,
    //   height: 500,
    // });
  }, []);

  const handleDragStart = (e) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => ({
        ...star,
        isDragging: star.id === id,
      })),
    );
  };

  const handleDragEnd = () => {
    setStars(
      stars.map((star) => ({
        ...star,
        isDragging: false,
      })),
    );
  };

  return (
    <Stage
      ref={canvasRef}
      width={width}
      height={height}
    >
      <Layer>
        {stars.map((star) => (
          <Star
            key={star.id}
            id={star.id}
            x={star.x}
            y={star.y}
            numPoints={5}
            innerRadius={20}
            outerRadius={40}
            fill="#89b717"
            opacity={0.8}
            draggable
            rotation={star.rotation}
            shadowColor="black"
            shadowBlur={10}
            shadowOpacity={0.6}
            shadowOffsetX={star.isDragging ? 10 : 5}
            shadowOffsetY={star.isDragging ? 10 : 5}
            scaleX={star.isDragging ? 1.2 : 1}
            scaleY={star.isDragging ? 1.2 : 1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </Layer>
      <Layer>
        <Image
          image={image}
          width={500}
          height={500}
        />
      </Layer>
      <Layer>
        <Rect
          width={width}
          height={height}
          fill={`rgba(${br},${bg},${bb},${ba})`}
          shadowBlur={5}
          stroke="#777"
          strokeWidth={1}
        />
      </Layer>
      <Layer>
        <Text
          width={width}
          height={height}
          text={content || '제목을 입력해주세요!'}
          fontSize={fontSize}
          fontFamily={fontFamily}
          fill={`rgba(${fr},${fg},${fb},${fa})`}
          align="center"
          verticalAlign="middle"
        />
      </Layer>
    </Stage>
  );
};

export default PreviewKonva;
