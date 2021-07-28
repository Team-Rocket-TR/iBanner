import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Deck, Card } from 'components/card';

import {
  setTheme, setBannerSize, setBannerRatios,
} from 'slice';

import {
  ThemeSwitch, BannerSizeRatioButtons, BannerCustom,
} from 'domain/setting/components';

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
    </Deck>
  );
};

export default BackgroundContainer;
