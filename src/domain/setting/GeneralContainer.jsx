import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoSunnySharp } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';

import {
  Card, CardTitle, CardSubTitle, Input,
} from 'components/card';
import {
  setWidth,
  setHeight,
  setWidthHeight,
} from 'slice';
import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

import BannerSizeButton from './components/BannerSizeButton';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const [theme, setTheme] = useState('light');

  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

  // Custom Change banner width
  const handleChangeWidth = (e) => {
    const bannerWidth = /^[0-9\b]+$/;
    if (e.target.value || bannerWidth.test(e.target.value)) {
      dispatch(setWidth(e.target.value));
    }
  };

  // Custom Change banner height
  const handleChangeHeight = (e) => {
    const bannerHeight = /^[0-9\b]+$/;
    if (e.target.value || bannerHeight.test(e.target.value)) {
      dispatch(setHeight(e.target.value));
    }
  };

  // Change banner size (Resize by Ratio)
  const handleChangeSize = ({ w, h }) => {
    dispatch(setWidthHeight({ width: w, height: h }));
  };

  // Change Theme (Dark mode & Light mode)
  const handleChangeTheme = (themeColor) => {
    setTheme(themeColor);
  };

  return (
    <Card>
      <CardTitle>General</CardTitle>
      <div>
        <IoSunnySharp onClick={() => handleChangeTheme('light')} />
        <RiMoonClearFill onClick={() => handleChangeTheme('dark')} />
        { (theme === 'light') ? <LightTheme /> : <DarkTheme /> }
      </div>
      <CardSubTitle>Aspect Ratio</CardSubTitle>
      {bannerRatios.map((props) => {
        const [ratio, w, h] = props;
        return (
          <BannerSizeButton
            width={w}
            height={h}
            ratio={ratio}
            key={ratio}
            onClick={handleChangeSize}
          />
        );
      })}
      <br />
      <CardSubTitle>Custom size</CardSubTitle>
      <Input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleChangeWidth} />
      <Input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleChangeHeight} />
    </Card>
  );
};

export default BackgroundContainer;
