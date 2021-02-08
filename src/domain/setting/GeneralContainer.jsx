import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoSunnySharp } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';

import Card from 'components/card/Card';
import CardTitle from 'components/card/CardTitle';
import CardSubTitle from 'components/card/CardSubTitle';
import Input from 'components/card/Input';

import {
  setWidth,
  setHeight,
  setWidthHeight,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
} from 'slice';

import BannerSizeButton from './components/BannerSizeButton';

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

  // Change Light Background
  const handleLightBackgroundChange = () => {
    dispatch(setMainBackgroundColor('#F0F0F0'));
    dispatch(setMainNavBackgroundColor('#c7c7c7'));
  };

  // Change Dark Background
  const handleDarkBackgroundChange = () => {
    dispatch(setMainBackgroundColor('#080a0f'));
    dispatch(setMainNavBackgroundColor('#19202c'));
  };

  return (
    <Card>
      <CardTitle>General</CardTitle>
      <div>
        <IoSunnySharp onClick={handleLightBackgroundChange} />
        <RiMoonClearFill onClick={handleDarkBackgroundChange} />
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
            onClick={handleSizeChange}
          />
        );
      })}
      <br />
      <CardSubTitle>Custom size</CardSubTitle>
      <Input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <Input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </Card>
  );
};

export default BackgroundContainer;
