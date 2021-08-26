import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Deck, Card } from 'components/card';

import {
  setTheme,
  setBannerSize,
  setBannerRatios,
  setPreviewColor,
  setLayerVisibility,
} from 'slice';

import {
  ThemeSwitch,
  BannerSizeRatioButtons,
  BannerCustom,
  BannerBackgroundColor,
  BannerLayerVisibility,
} from 'domain/setting/components';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const isLightTheme = useSelector((state) => state.isLightTheme);

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const rootLayer = useSelector((state) => state.rootLayer);
  const layerVisibility = useSelector((state) => ({
    imageLayerVisible: state.imageLayer.visible,
    filterLayerVisible: state.filterLayer.visible,
    textLayerVisible: state.textLayer.visible,
  }));

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
    const theme = (lightTheme)
      ? { theme: 'light', isLightTheme: true }
      : { theme: 'dark', isLightTheme: false };
    dispatch(setTheme(theme));
  };

  // Change Preview Banner BackgroundColor
  const handleChangePreviewBackgroundcolor = (color) => {
    dispatch(setPreviewColor(color.rgb));
  };

  const handleClickLayerVisibility = ({ layer, visible }) => {
    dispatch(setLayerVisibility({ layer, visible }));
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
          color={rootLayer}
          onChange={handleChangePreviewBackgroundcolor}
        />
      </Card>
      <Card>
        <BannerLayerVisibility
          layerVisibility={layerVisibility}
          onClick={handleClickLayerVisibility}
        />
      </Card>
    </Deck>
  );
};

export default BackgroundContainer;
