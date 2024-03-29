import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setTextPosition, setSelectedTextId } from 'slice';

import { Stage } from 'react-konva';

import {
  MemoizedImageLayer,
  MemoizedFilterLayer,
  MemoizedGridHelperLayer,
  MemoizedTextLayer,
  MemoizedRootLayer,
} from 'domain/preview/components';

const PreviewKonva = ({ canvasRef }) => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const layerColor = useSelector((state) => state.rootLayer);

  const {
    visible: imageLayerVisibility,
    image,
    scale,
    sizeX,
    sizeY,
    alignX,
    alignY,
  } = useSelector((state) => state.imageLayer);

  const {
    visible: filterLayerVisibility,
    backgroundColor,
  } = useSelector((state) => state.filterLayer);

  const {
    visible: textLayerVisibility,
    selectedTextId,
    texts,
  } = useSelector((state) => state.textLayer);

  useEffect(() => {
    const defaultText = { ...texts[0] };
    defaultText.position = 'custom';

    const newTexts = [
      defaultText,
      ...texts.slice(1),
    ];
    dispatch(setTextPosition({ texts: newTexts }));
  }, []);

  function handClickStage(e) {
    e.evt.stopPropagation();
    dispatch(setSelectedTextId(null));
  }

  function handleSelectContent(id) {
    dispatch(setSelectedTextId(id));
  }

  return (
    <Stage
      ref={canvasRef}
      width={width}
      height={height}
      onClick={handClickStage}
      onTap={handClickStage}
    >
      <MemoizedRootLayer
        color={layerColor}
        width={width}
        height={height}
      />
      {imageLayerVisibility
        ? (
          <MemoizedImageLayer
            url={image}
            size={{ width: sizeX, height: sizeY }}
            scale={{ x: scale, y: scale }}
            align={{ x: alignX, y: alignY }}
            canvas={{ width, height }}
          />
        ) : null}
      {filterLayerVisibility
        ? (
          <MemoizedFilterLayer
            fill={backgroundColor}
            width={width}
            height={height}
          />
        ) : null}
      {selectedTextId
        ? (
          <MemoizedGridHelperLayer
            width={width}
            height={height}
            backgroundColor={layerColor}
          />
        ) : null}
      {textLayerVisibility
        ? (
          <MemoizedTextLayer
            texts={texts}
            selectedTextId={selectedTextId}
            onSelect={handleSelectContent}
          />
        ) : null}
    </Stage>
  );
};

export default PreviewKonva;
