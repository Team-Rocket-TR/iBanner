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
  const [canvas, setCanvas] = useState();

  const canvasRef = useRef(null);

  const initCanvas = () => {
    setCanvas(
      new fabric.Canvas(canvasRef.current, {
        width,
        height,
      }),
    );
  };

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
    console.log('PreviewFabric 컴포넌트가 화면에 나타남');
    console.log(canvas, width, height);

    if (!canvas) {
      initCanvas();
      return () => (null);
    }

    drawCanvas(clearCanvas(canvas), drawRect(canvas), drawText(canvas));
    return () => {
      console.log('PreviewFabric 컴포넌트가 화면에서 사라짐!');
    };
  }, [canvas, width, height]);

  return (
    <>
      <button type="button" onClick={() => clearCanvas()}>Clear</button>
      <Canvas
        ref={canvasRef}
      />
    </>
  );
};

export default PreviewFabric;
