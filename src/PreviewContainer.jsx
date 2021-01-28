import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

// import * as htmlToImage from 'html-to-image';

import html2canvas from 'html2canvas';

// import Preview from './Preview';
import PreviewImage from './PreviewImage';
import PreviewBackgroundColor from './PreviewBackgroundColor';
import PreviewText from './PreviewText';

import { setCanvasRef } from './slice';

import CanvasLayers from './component/CanvasLayers';

const PreviewContainer = () => {
  const dispatch = useDispatch();

  const layers = useRef(null);

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const color = useSelector((state) => state.backgroundColor);
  const backgroundImage = useSelector((state) => state.backgroundImage);

  const content = useSelector((state) => state.content);
  const fontSize = useSelector((state) => state.fontSize);
  const fontColor = useSelector((state) => state.fontColor);

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
        {(backgroundImage
          ? (
            <PreviewImage
              width={width}
              height={height}
              backgroundImage={backgroundImage}
              onDraw={handleDraw}
            />
          )
          : null)}
        {(color
          ? (
            <PreviewBackgroundColor
              width={width}
              height={height}
              color={color}
              onDraw={handleDraw}
            />
          )
          : null)}
        <PreviewText
          width={width}
          height={height}
          content={content}
          fontSize={fontSize}
          fontColor={fontColor}
          onDraw={handleDraw}
        />
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
