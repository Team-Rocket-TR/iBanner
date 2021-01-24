import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BannerSizeButton from './BannerSizeButton';

import {
  setWidth,
  setHeight,
  setWidthHeight,
} from './slice';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  // Custom Change banner width
  const handleWidthChange = (e) => {
    const bannerWidth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerWidth.test(e.target.value)) {
      dispatch(setWidth(e.target.value));
    }
  };

  // Custom Change banner heigth
  const handleHeightChange = (e) => {
    const bannerHeigth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerHeigth.test(e.target.value)) {
      dispatch(setHeight(e.target.value));
    }
  };

  const handleSizeChange = () => {
    dispatch(setWidthHeight({ width: 500, height: 500 }));
  };

  return (
    <div>
      <h4>Genernal</h4>
      <BannerSizeButton onClick={handleSizeChange} widthRatio={width} heightRatio={height} />
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </div>
  );
};

export default BackgroundContainer;
