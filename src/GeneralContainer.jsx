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

  const handleSizeChange = ({ w, h }) => {
    dispatch(setWidthHeight({ width: w, height: h }));
  };

  return (
    <div>
      <h4>Genernal</h4>
      {[['1:1', 500, 500], ['4:3', 800, 600]].map((wh) => {
        const [ratio, w, h] = wh;
        return (
          <BannerSizeButton width={w} height={h} onClick={handleSizeChange}>
            {ratio}
          </BannerSizeButton>
        );
      })}
      <input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </div>
  );
};

export default BackgroundContainer;
