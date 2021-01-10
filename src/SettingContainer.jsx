import React from 'react';

import { useDispatch } from 'react-redux';

import { setColor } from './slice';

import ColorpickerIcon from './ColorpickerIcon';

const BannerContainer = () => {
  const dispatch = useDispatch();

  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  return (
    <>
      <ColorpickerIcon onClick={handleClick} />
    </>
  );
};

export default BannerContainer;
