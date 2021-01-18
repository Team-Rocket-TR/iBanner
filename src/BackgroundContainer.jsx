import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setBackgroundColor,
  setWidth,
  setHeight,
} from './slice';

import ColorpickerIcon from './ColorpickerIcon';

const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.color);
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  // Change banner background color
  const handleChangeComplete = (color) => {
    dispatch(setBackgroundColor(color.hex));
  };

  // Change banner width
  const handleWidthChange = (e) => {
    const bannerWidth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerWidth.test(e.target.value)) {
      dispatch(setWidth(e.target.value));
    }
  };

  // Change banner heigth
  const handleHeightChange = (e) => {
    const bannerHeigth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerHeigth.test(e.target.value)) {
      dispatch(setHeight(e.target.value));
    }
  };

  return (
    <>
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
      <ColorpickerIcon handleChangeComplete={handleChangeComplete} color={backgroundColor} />
    </>
  );
};

export default BackgroundContainer;
