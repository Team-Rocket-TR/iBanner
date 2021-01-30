import React from 'react';

import { useSelector } from 'react-redux';

import { MemoizedBackgroundLayer } from './components/BackgroundLayer';

const BackgroundLayerContainer = ({ onDraw }) => {
  const color = useSelector((state) => state.backgroundColor);

  return (
    <>
      {(color
        ? (
          <MemoizedBackgroundLayer
            color={color}
            onDraw={onDraw}
          />
        )
        : null)}
    </>
  );
};

export default BackgroundLayerContainer;
