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
  backgroundColor: {
    r, g, b, a,
  },
  content,
  fontSize,
  fontColor,
  onDraw,
}) => {
  const [canvas, setCanvas] = useState('');

  const canvasRef = useRef(null);

  const initCanvas = () => (
    new fabric.Canvas(`${canvasRef.current.id}`, {
      height,
      width,
    })
  );

  const drawCanvas = (...works) => {
    works.map((work) => work);
  };

  const clearCanvas = (cvs) => {
    cvs.clear();
  };

  const drawRect = (cvs) => {
    const rect = new fabric.Rect({
      width,
      height,
      fill: 'yellow',
      selectable: false,
      hoverCursor: 'default',
    });
    cvs.add(rect);
    cvs.renderAll();
  };

  const drawText = (cvs) => {
    const fillText = content || '제목을 입력해주세요!';
    const text = new fabric.Text(fillText, {
      top: 0,
      left: 0,
      fill: '#f55',
    });
    cvs.add(text);
    cvs.renderAll();
  };

  useEffect(() => {
    const cvs = initCanvas();
    drawCanvas(clearCanvas(cvs), drawRect(cvs), drawText(cvs));
  }, []);

  return (
    <>
      <button type="button" onClick={() => clearCanvas()}>Clear</button>
      <Canvas
        ref={canvasRef}
        id="canvas"
      />
    </>
  );
};

export default PreviewFabric;
