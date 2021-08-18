import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Deck, Card } from 'components/card';

import {
  setTheme,
  setBannerSize,
  setBannerRatios,
  setPreviewColor,
} from 'slice';

import {
  ThemeSwitch,
  BannerSizeRatioButtons,
  BannerCustom,
  BannerBackgroundColor,
} from 'domain/setting/components';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const isLightTheme = useSelector((state) => state.isLightTheme);

  const layerColor = useSelector((state) => state.rootLayer);

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

  // Change Preview Banner BackgroundColor
  const handleChangePreviewBackgroundcolor = (color) => {
    console.log(color.rgb);
    dispatch(setPreviewColor(color.rgb));
  };

  return (
    <Deck>
      <Card>
        <ThemeSwitch
          onChange={handleChangeTheme}
          checked={isLightTheme}
        />
      </Card>
      <Card>
        <BannerSizeRatioButtons
          width={width}
          onClick={handleChangeBannerRatios}
        />
      </Card>
      <Card>
        <BannerCustom
          width={width}
          height={height}
          onChange={handleChangeBannerSize}
        />
      </Card>
      <Card>
        <BannerBackgroundColor
          color={layerColor}
          onChange={handleChangePreviewBackgroundcolor}
        />
      </Card>
    </Deck>
  );
};

export default BackgroundContainer;
