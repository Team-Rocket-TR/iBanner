import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setSelectedContentId } from 'slice';

import { Stage } from 'react-konva';

import {
  MemoizedImageLayer,
  MemoizedBackgroundLayer,
  MemoizedContentLayer,
} from 'domain/preview/components';

const PreviewKonva = ({ canvasRef }) => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const {
    image,
    scale,
    sizeX,
    sizeY,
    alignX,
    alignY,
  } = useSelector((state) => state.imageLayer);

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const {
    contents,
    selectedContentId,
  } = useSelector((state) => state.contentLayer);

  function handleSelectContent(id) {
    dispatch(setSelectedContentId(id));
  }

  return (
    <Stage
      ref={canvasRef}
      width={width}
      height={height}
    >
      <MemoizedImageLayer
        url={image}
        size={{ width: sizeX, height: sizeY }}
        scale={{ x: scale, y: scale }}
        align={{ x: alignX, y: alignY }}
        canvas={{ width, height }}
      />
      <MemoizedBackgroundLayer
        fill={backgroundColor}
        width={width}
        height={height}
      />
      <MemoizedContentLayer
        contents={contents}
        selectedContentId={selectedContentId}
        onSelect={handleSelectContent}
      />
    </Stage>
  );
};

export default PreviewKonva;
