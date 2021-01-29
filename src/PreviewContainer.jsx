import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import html2canvas from 'html2canvas';

import ImageLayerContainer from './ImageLayerContainer';
import BackgroundLayerContainer from './BackgroundLayerContainer';
import TextLayerContainer from './TextLayerContainer';

import { setCanvasRef } from './slice';

import CanvasLayers from './component/CanvasLayers';

const PreviewContainer = () => {
  const dispatch = useDispatch();

  const layers = useRef(null);

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  function handleDraw() {
    const preview = layers.current;
    html2canvas(preview).then((canvas) => {
      canvas.toBlob((blob) => {
        const localURL = window.URL.createObjectURL(blob);
        dispatch(setCanvasRef(localURL));
      }, 'image/png', 1.0);
    });
  }

  return (
    <>
      <CanvasLayers
        ref={layers}
        width={width}
        height={height}
      >
        <ImageLayerContainer onDraw={handleDraw} />
        <BackgroundLayerContainer onDraw={handleDraw} />
        <TextLayerContainer onDraw={handleDraw} />
      </CanvasLayers>
    </>
  );
};

export default PreviewContainer;

// <Preview
//   width={width}
//   height={height}
//   color={color}
//   backgroundImage={backgroundImage}
//   content={content}
//   fontSize={fontSize}
//   fontColor={fontColor}
//   onDraw={handleDraw}
// />

// function handleDraw(canvas) {
// canvas.toBlob((blob) => {
//   const localURL = window.URL.createObjectURL(blob);
//   dispatch(setCanvasRef(localURL));
// }, 'image/png', 1.0);
// }
