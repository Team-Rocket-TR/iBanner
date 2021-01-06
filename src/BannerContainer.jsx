import React, { useState } from 'react';
import BannerPreview from './BannerPreview';
import ColorpickerIcon from './ColorpickerIcon';

const BannerContainer = () => {
  const [color, setColor] = useState('gray');
  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <>
      <BannerPreview color={color} />
      <ColorpickerIcon onClick={handleClick} />
    </>
  );
};

export default BannerContainer;
