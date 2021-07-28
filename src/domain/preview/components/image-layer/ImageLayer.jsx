import React from 'react';

import { Layer, Image } from 'react-konva';

import useImage from 'use-image';

export default function ImageLayer({
  backgroundImage,
  scale,
}) {
  const [image] = useImage(backgroundImage);

  return (
    <Layer>
      <Image
        image={image}
        scale={{
          x: scale,
          y: scale,
        }}
      />
    </Layer>
  );
}

export const MemoizedImageLayer = React.memo(ImageLayer);
