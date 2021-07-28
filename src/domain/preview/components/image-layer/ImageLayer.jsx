import React from 'react';

import { Layer, Image } from 'react-konva';

import useImage from 'use-image';

export default function ImageLayer({
  backgroundImage,
  width,
  height,
}) {
  const [image] = useImage(backgroundImage);

  return (
    <Layer>
      <Image
        image={image}
        // width={width}
        // height={height}
      />
    </Layer>
  );
}

export const MemoizedImageLayer = React.memo(ImageLayer);
