import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import { fabric } from 'fabric';

const Canvas = styled.canvas`
  border: 1px dashed;
`;

const PreviewFabric = ({
  canvasRef,
  width,
  height,
  backgroundImage,
  backgroundColor,
  content,
  fontSize,
  fontColor,
}) => {
  const [canvas, setCanvas] = useState();

  const initializeCanvas = () => new fabric.Canvas(
    canvasRef.current, {
      width,
      height,
    },
  );

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
        fontFamily: 'Roboto',
        fontSize,
        fill: `rgb(${r}, ${g}, ${b}, ${a})`,
        top: 0.5 * height,
        left: 0.5 * width,
        originX: 'center',
        originY: 'center',
        selectable: false,
        hoverCursor: 'default',
      },
    );
  };

  const drawPreview = (...works) => {
    works.map((work) => work);
  };

  const clearCanvas = (cvs) => cvs.clear();

  const drawCanvas = (cvs) => cvs.setWidth(width).setHeight(height);

  const drawImage = (cvs) => {
    fabric.Image.fromURL(backgroundImage, async (image) => {
      const imageWidth = image.width / 2;
      const imageHeight = image.height / 2;

      const img = image.set({
        left: (width - imageWidth) / 2,
        top: (height - imageHeight) / 2,
        scaleX: 0.5,
        scaleY: 0.5,
        centeredScaling: true,
        selectable: false,
      });
      return cvs.add(img)
        .sendToBack(img)
        .renderAll();
    });
  };

  const drawRect = (cvs) => {
    const rect = initializeRectangle({ width, height, fillColor: backgroundColor });
    return cvs.add(rect)
      .renderAll();
  };

  const drawText = (cvs) => {
    const fillText = content || '제목을 입력해주세요!';
    const text = initializeText({ fillText });
    return cvs.add(text)
      .renderAll();
  };

  useEffect(() => {
    if (!canvas) {
      const fabricCanvas = initializeCanvas();
      setCanvas(fabricCanvas);
      return () => (null);
    }
    drawPreview(
      clearCanvas(canvas),
      drawCanvas(canvas),
      drawImage(canvas),
      drawRect(canvas),
      drawText(canvas),
    );
    return () => (null);
  }, [
    canvas,
    width,
    height,
    backgroundImage,
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
