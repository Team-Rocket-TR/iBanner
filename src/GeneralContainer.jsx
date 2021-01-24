import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setWidth,
  setHeight,
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
    dispatch(setWidth(500), setHeight(500));
  };

  return (
    <div>
      <h4>Genernal</h4>
      <button type="button" onClick={handleSizeChange}>1:1</button>
      <button type="button">9:16</button>
      <button type="button">16:9</button>
      <button type="button">4:5</button>
      <button type="button">5:4</button>
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </div>
  );
};

export default BackgroundContainer;
