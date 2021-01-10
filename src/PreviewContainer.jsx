import React from 'react';

import { useSelector } from 'react-redux';

import BannerPreview from './BannerPreview';

const PreviewContainer = () => {
  const color = useSelector((state) => state.color);

  return (
    <>
      <BannerPreview color={color} />
    </>
  );
};

export default PreviewContainer;
