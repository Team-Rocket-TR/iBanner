import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setColor,
  setWidth,
  setHeight,
} from './slice';

import ColorpickerIcon from './ColorpickerIcon';

const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  const handleWidthChange = (e) => {
    dispatch(setWidth(e.target.value));
  };
  const handleHeightChange = (e) => {
    dispatch(setHeight(e.target.value));
  };

  return (
    <>
      <input type="text" name="width" value={width} placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} placeholder="Banner Height" onChange={handleHeightChange} />
      <ColorpickerIcon onClick={handleClick} />
    </>
  );
};

export default BackgroundContainer;
