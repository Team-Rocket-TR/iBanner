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
    const fabricCanvas = new fabric.Canvas(
      canvasRef.current, {
        width,
        height,
      },
    );
    setCanvas(fabricCanvas);
  };

  const initializeRectangle = () => {
    const {
      r, g, b, a,
    } = backgroundColor;
    return new fabric.Rect({
      width,
      height,
      fill: `rgb(${r}, ${g}, ${b}, ${a})`,
      selectable: false,
      hoverCursor: 'default',
    });
  };

  const initializeText = ({ fillText }) => {
    const {
      r, g, b, a,
    } = fontColor;
    return new fabric.Text(
      fillText, {
        originX: 'center',
        originY: 'center',
        left: 0.5 * width,
        top: 0.5 * height,
        fontSize,
        fill: `rgb(${r}, ${g}, ${b}, ${a})`,
      },
    );
  };

  const drawPreview = (...works) => {
    works.map((work) => work);
  };

  const clearCanvas = (cvs) => cvs.clear();

  const drawCanvas = (cvs) => cvs.setWidth(width).setHeight(height);

  const drawRect = (cvs) => {
    const rect = initializeRectangle({ width, height, fillColor: backgroundColor });
    return cvs.add(rect).renderAll();
  };

  const drawText = (cvs) => {
    const fillText = content || '제목을 입력해주세요!';
    const text = initializeText({ fillText });
    return cvs.add(text).renderAll();
  };

  useEffect(() => {
    if (!canvas) {
      initializeCanvas();
      return () => (null);
    }
    drawPreview(
      clearCanvas(canvas),
      drawCanvas(canvas),
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
