import React, { useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import html2canvas from 'html2canvas';

import Layers from 'components/layer/Layers';

import { setCanvasRef } from 'slice';

import ImageLayerContainer from './ImageLayerContainer';
import BackgroundLayerContainer from './BackgroundLayerContainer';
import TextLayerContainer from './TextLayerContainer';

const PreviewContainer = () => {
  const dispatch = useDispatch();

  const layers = useRef(null);

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  function handleDraw() {
    const preview = layers.current;
    html2canvas(preview).then((canvas) => {
      canvas.toBlob(async (blob) => {
        const localURL = await window.URL.createObjectURL(blob);
        dispatch(setCanvasRef(localURL));
      }, 'image/png', 1.0);
    });
  }

  return (
    <>
      <Layers
        ref={layers}
        width={width}
        height={height}
      >
        <ImageLayerContainer onDraw={handleDraw} />
        <BackgroundLayerContainer onDraw={handleDraw} />
        <TextLayerContainer onDraw={handleDraw} />
      </Layers>
    </>
  );
};

export default PreviewContainer;
