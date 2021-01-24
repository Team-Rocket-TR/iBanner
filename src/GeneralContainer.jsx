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

  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

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

  // Change banner size (Resize by Ratio)
  const handleSizeChange = ({ w, h }) => {
    dispatch(setWidthHeight({ width: w, height: h }));
  };

  return (
    <div>
      <h4>General</h4>
      {bannerRatios.map((props) => {
        const [ratio, w, h] = props;
        return (
          <BannerSizeButton
            width={w}
            height={h}
            ratio={ratio}
            key={ratio}
            onClick={handleSizeChange}
          />
        );
      })}
      <br />
      <label htmlFor="customSize">Custom SIze</label>
      <br />
      <input type="text" className="customSize" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" className="customSize" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </div>
  );
};

export default BackgroundContainer;
