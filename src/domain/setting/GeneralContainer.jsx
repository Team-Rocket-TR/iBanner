import React from 'react';

import Switch from 'react-switch';

import { useDispatch, useSelector } from 'react-redux';

import { IoSunnySharp } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';

import {
  Card, CardSubTitle,
} from 'components/card';

import {
  setTheme, setSize, setWidthHeight, setLightTheme,
} from 'slice';

import { BannerSizeButton, BannerSize } from 'domain/setting/components/';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const isLightTheme = useSelector((state) => state.isLightTheme);

  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

  // Custom Change banner size
  const handleChangeBannerSize = ({ name, value }) => {
    dispatch(setSize({ name, value }));
  };

  // Change banner size (Resize by Ratio)
  const handleChangeSize = ({ w, h }) => {
    dispatch(setWidthHeight({ width: w, height: h }));
  };

  // Change Theme (Dark theme & Light theme)
  const handleChangeTheme = (lightTheme) => {
    dispatch(setLightTheme(lightTheme));

    if (lightTheme) {
      dispatch(setTheme('light'));
    } else {
      dispatch(setTheme('dark'));
    }
  };

  return (
    <Card>
      <CardSubTitle>Theme</CardSubTitle>
      <Switch
        width={50}
        height={24}
        onColor="#f9f3f0"
        onHandleColor="#ecb399"
        onChange={handleChangeTheme}
        checked={isLightTheme}
        checkedIcon={(
          <RiMoonClearFill
            size={24}
            color="#bfbfbf"
          />
        )}
        uncheckedIcon={(
          <IoSunnySharp
            size={24}
            color="#ffe6c0"
          />
        )}
      />
      <br />

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
      {[{
        name: 'width',
        value: width,
        placeholder: 'Banner Width',
      }, {
        name: 'height',
        value: height,
        placeholder: 'Banner Height',
      }].map(({ name, value, placeholder }) => (
        <BannerSize
          key={name}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeBannerSize}
        />
      ))}
    </Card>
  );
};

export default BackgroundContainer;
