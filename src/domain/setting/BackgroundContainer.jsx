import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card/Card';
import CardSubTitle from 'components/card/CardSubTitle';

import {
  setBackgroundColor, setAlpha, setBackgroundImage, setBackgroundColorHex,
} from 'slice';

import ColorpickerIcon from './components/ColorpickerIcon';
import ImageFile from './components/ImageFile';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);
  const backgroundColorHex = useSelector((state) => state.backgroundColorHex);

  const rgbToHex = () => {
    const {
      r, g, b, a,
    } = backgroundColor;
    let red = r.toString(16);
    let green = g.toString(16);
    let blue = b.toString(16);
    let alpha = Math.round(a * 255).toString(16);

    if (red.length === 1) { red = `0 + ${r}`; }
    if (green.length === 1) { green = `0 + ${g}`; }
    if (blue.length === 1) { blue = `0 + ${b}`; }
    if (alpha.length === 1) { alpha = `0 + ${a}`; }

    return dispatch(setBackgroundColorHex(`#${red + green + blue + alpha}`));
  };

  const handleChangeBackgroundcolor = ({ rgb }) => {
    dispatch(setBackgroundColor(rgb));
    rgbToHex();
  };

  const handleChangeAlpha = ({ rgb }) => {
    const { a } = rgb;
    dispatch(setAlpha(a));
  };

  const handleChangeFile = async ({ file }) => {
    if (!file) return;

    const image = file;
    const localImageURL = await window.URL.createObjectURL(image);

    dispatch(setBackgroundImage(localImageURL));
  };


  return (
    <Card>
      <CardSubTitle>Background Color</CardSubTitle>
      <ColorpickerIcon
        color={backgroundColor}
        onChangeBackgroundcolor={handleChangeBackgroundcolor}
        onChangeAlpha={handleChangeAlpha}
        backgroundColorHex={backgroundColorHex}
      />
      <CardSubTitle>Background Image</CardSubTitle>
      <ImageFile onChange={handleChangeFile} />
    </Card>
  );
};

export default BackgroundContainer;
