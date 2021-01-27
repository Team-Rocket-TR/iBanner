import React, { useEffect, useRef } from 'react';

const Preview = ({
  width,
  height,
  color,
  backgroundImage,
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.fillStyle = color;
    context.fillRect(0, 0, width, height);

    const imageObj = new Image();
    imageObj.src = backgroundImage || '';
    imageObj.onload = () => {
      context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
    };

    context.font = `${fontSize}px Arial`;
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
