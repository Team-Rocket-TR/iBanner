import React from 'react';

import { useSelector } from 'react-redux';

import { MemoizedImageLayer } from './components';

const ImageLayerContainer = ({ onDraw }) => {
  const backgroundImage = useSelector((state) => state.backgroundImage);

  return (
    <>
      {(backgroundImage
        ? (
          <MemoizedImageLayer
            backgroundImage={backgroundImage}
            onDraw={onDraw}
          />
        )
        : null)}

    </>
  );
};

export default ImageLayerContainer;
