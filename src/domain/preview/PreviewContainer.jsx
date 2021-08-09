import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContentPosition, setSelectedContentId } from 'slice';

import { Stage } from 'react-konva';

import {
  MemoizedImageLayer,
  MemoizedBackgroundLayer,
  MemoizedGridHelperLayer,
  MemoizedContentLayer,
  MemoizedPreviewLayer,
} from 'domain/preview/components';

const PreviewKonva = ({ canvasRef }) => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const layerColor = useSelector((state) => state.previewLayerColor);

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

  useEffect(() => {
    const defaultContent = { ...contents[0] };
    defaultContent.position = 'custom';

    const newContents = [
      defaultContent,
      ...contents.slice(1),
    ];
    dispatch(setContentPosition({ contents: newContents }));
  }, []);

  function handClickStage() {
    dispatch(setSelectedContentId(null));
  }

  function handleSelectContent(id) {
    dispatch(setSelectedContentId(id));
  }

  return (
    <Stage
      ref={canvasRef}
      width={width}
      height={height}
      onClick={handClickStage}
      onTap={handClickStage}
    >
      <MemoizedPreviewLayer
        color={layerColor}
        width={width}
        height={height}
      />
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
      {(selectedContentId)
        ? (
          <MemoizedGridHelperLayer
            width={width}
            height={height}
          />
        )
        : null}
      <MemoizedContentLayer
        contents={contents}
        selectedContentId={selectedContentId}
        onSelect={handleSelectContent}
      />
    </Stage>
  );
};

export default PreviewKonva;
