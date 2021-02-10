import React, { useLayoutEffect, useRef } from 'react';

const Preview = ({
  width,
  height,
  backgroundImage,
  backgroundColor,
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
  const canvasRef = useRef(null);

  function drawImage(ctx, ...drawOthers) {
    const imageObj = new Image();
    imageObj.src = backgroundImage;
    imageObj.onload = () => {
      ctx.drawImage(imageObj, 0, 0, width, height);

      drawOthers.map((drawOther) => drawOther(ctx));
    };
  }

  function drawBackground(ctx) {
    const {
      r, g, b, a,
    } = backgroundColor;

    ctx.fillStyle = `rgb(${r}, ${g}, ${b}, ${a})`;
    ctx.fillRect(0, 0, width, height);
  }

  function drawContext(ctx) {
    const {
      r, g, b, a,
    } = fontColor;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `${fontSize}px Arial`; // TODO fontStyle
    ctx.fillStyle = `rgb(${r}, ${g}, ${b}, ${a})`;
    ctx.fillText(content || '제목을 입력해주세요!', width / 2, height / 2);
  }

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (backgroundImage) {
      drawImage(ctx, drawBackground, drawContext);
      onDraw(canvas);
      return;
    }

    drawBackground(ctx);
    drawContext(ctx);
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
