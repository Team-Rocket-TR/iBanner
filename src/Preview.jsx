import React, { useEffect, useRef } from 'react';

const Preview = ({
  width,
  height,
  color,
  content,
  fontColor,
  onDraw,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = color;
    context.fillRect(0, 0, width, height);

    context.font = '1.5rem Arial';
    context.fillStyle = fontColor;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.fillText(content || '제목을 입력해주세요!', width / 2, height / 2);

    onDraw(canvas);
  });

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default Preview;
