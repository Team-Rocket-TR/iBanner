import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card/Card';
import CardTitle from 'components/card/CardTitle';
import CardSubTitle from 'components/card/CardSubTitle';

import { setBackgroundColor, setAlpha, setBackgroundImage } from 'slice';

import ColorpickerIcon from './components/ColorpickerIcon';
import ImageFile from './components/ImageFile';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const handleChangeBackgroundcolor = ({ rgb }) => {
    dispatch(setBackgroundColor(rgb));
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
      <CardTitle>Background</CardTitle>

      <CardSubTitle>Background Color</CardSubTitle>
      <ColorpickerIcon
        color={backgroundColor}
        onChangeBackgroundcolor={handleChangeBackgroundcolor}
        onChangeAlpha={handleChangeAlpha}
      />

      <CardSubTitle>Background Image</CardSubTitle>
      <ImageFile onChange={handleChangeFile} />
    </Card>
  );
};

export default BackgroundContainer;
