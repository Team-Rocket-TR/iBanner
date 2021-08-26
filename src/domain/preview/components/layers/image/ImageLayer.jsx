import React from 'react';

import { Layer, Image } from 'react-konva';

import useImage from 'use-image';

import { positionByAlign } from 'utils';

export default function ImageLayer({
  url,
  size = { width: 0, height: 0 },
  scale = { x: 1, y: 1 },
  align = { x: 'center', y: 'middle' },
  canvas = { width: 0, height: 0 },
}) {
  const [image] = useImage(url);

  const pointX = positionByAlign({
    align: align.x,
    canvasLength: canvas.width,
    imageLength: size.width,
    imageScale: scale.x,
  });

  const pointY = positionByAlign({
    align: align.y,
    canvasLength: canvas.height,
    imageLength: size.height,
    imageScale: scale.y,
  });

  return (
    <Layer>
      <Image
        image={image}
        scale={scale}
        x={pointX}
        y={pointY}
      />
    </Layer>
  );
}

export const MemoizedImageLayer = React.memo(ImageLayer);
