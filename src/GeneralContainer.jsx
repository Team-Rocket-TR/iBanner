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
    <div>
      <h4>Genernal</h4>
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </div>
  );
};

export default BackgroundContainer;
