import React, { useState, useRef, useEffect } from 'react';

import { fabric } from 'fabric';

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
  const [canvas, setCanvas] = useState(null);

  const preview = new fabric.Canvas('canvas', {
    width,
    height,
  });

  const addRect = (cvs) => {
    const rect = new fabric.Rect({
      width,
      height,
      fill: 'yellow',
    });
    cvs.add(rect);
    cvs.renderAll();
  };

  useEffect(() => {
    addRect(preview);
  });

  return (
    <canvas id="canvas" />
  );
};

export default PreviewFabric;
