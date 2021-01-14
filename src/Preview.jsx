import React, { useRef, useEffect } from 'react';

const Preview = ({
  width,
  height,
  color,
  content,
  fontColor,
}) => {
  const canvasRef = useRef(null);

  const draw = (ctx) => {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    ctx.font = '1.5rem Arial';
    ctx.fillStyle = fontColor;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center';
    ctx.fillText(content || '제목을 입력해주세요!', width / 2, height / 2);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const banner = canvas.getContext('2d');
    draw(banner);
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
    />
  );
};

export default Preview;
