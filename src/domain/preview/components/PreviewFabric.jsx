import React, { useState, useRef, useEffect } from 'react';

import styled from 'styled-components';

import { fabric } from 'fabric';

const Canvas = styled.canvas`
  border: 1px dashed;
`;

const PreviewFabric = ({
  width,
  height,
  backgroundImage,
  backgroundColor,
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
  const [canvas, setCanvas] = useState();

  const canvasRef = useRef(null);

  const initializeCanvas = () => {
    setCanvas(
      new fabric.Canvas(canvasRef.current, {
        width,
        height,
      }),
    );
  };

  const destroyCanvas = () => {
    setCanvas(null);
  };

  const clearCanvas = (cvs) => {
    cvs.clear();
  };

  const drawCanvas = (...works) => {
    works.map((work) => work);
  };

  const drawRect = (cvs) => {
    const {
      r, g, b, a,
    } = backgroundColor;
    const rect = new fabric.Rect({
      width,
      height,
      fill: `rgb(${r}, ${g}, ${b}, ${a})`,
      selectable: false,
      hoverCursor: 'default',
    });
    cvs.add(rect);
    cvs.renderAll();
  };

  const drawText = (cvs) => {
    const fillText = content || '제목을 입력해주세요!';
    const {
      r, g, b, a,
    } = fontColor;
    const text = new fabric.Text(
      fillText, {
        originX: 'center',
        originY: 'center',
        top: 0.5 * height,
        left: 0.5 * width,
        fill: `rgb(${r}, ${g}, ${b}, ${a})`,
        fontSize,
      },
    );
    cvs.add(text);
    cvs.renderAll();
  };

  useEffect(() => {
    if (!canvas) {
      initializeCanvas();
      return () => (null);
    }

    drawCanvas(
      clearCanvas(canvas),
      drawRect(canvas),
      drawText(canvas),
      onDraw(canvasRef.current),
    );
    return () => (null);
  }, [
    canvas,
    width,
    height,
    backgroundColor,
    content,
    fontSize,
    fontColor,
  ]);

  return (
    <Canvas ref={canvasRef} />
  );
};

export default PreviewFabric;
