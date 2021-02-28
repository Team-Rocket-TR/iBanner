import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Card, CardSubTitle } from 'components/card';

import {
  setTheme, setBannerSize, setBannerRatios,
} from 'slice';

import {
  ThemeSwitch, BannerSizeRatioButtons, BannerCustom,
} from 'domain/setting/components/general';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const isLightTheme = useSelector((state) => state.isLightTheme);

  // Custom Change banner size
  const handleChangeBannerSize = ({ name, value }) => {
    dispatch(setBannerSize({ name, value }));
  };

  // Change banner size (Resize by Ratio)
  const handleChangeBannerRatios = ({ w, h }) => {
    dispatch(setBannerRatios({ width: w, height: h }));
  };

  // Change Theme (Dark theme & Light theme)
  const handleChangeTheme = (lightTheme) => {
    const theme = (lightTheme) ? { theme: 'light', isLightTheme: true } : { theme: 'dark', isLightTheme: false };
    dispatch(setTheme(theme));
  };

  return (
    <Card>
      <CardSubTitle>Theme</CardSubTitle>
      <ThemeSwitch
        onChange={handleChangeTheme}
        checked={isLightTheme}
      />

      <CardSubTitle>Aspect Ratio</CardSubTitle>
      <BannerSizeRatioButtons
        width={width}
        onClick={handleChangeBannerRatios}
      />

      <CardSubTitle>Custom size</CardSubTitle>
      <BannerCustom
        width={width}
        height={height}
        onChange={handleChangeBannerSize}
      />
    </Card>
  );
};

export default BackgroundContainer;
