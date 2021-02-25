import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Card, CardSubTitle } from 'components/card';

import {
  setBackgroundColor, setAlpha, setBackgroundImage,
} from 'slice';

import ColorpickerIcon from './components/ColorpickerIcon';
import ImageFile from './components/ImageFile';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);

  // CHange Banner BackgroundColor
  const handleChangeBackgroundcolor = ({ rgb }) => {
    dispatch(setBackgroundColor(rgb));
  };

  // Change RGB => a
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

  const handleClickDelete = () => {
    dispatch(setBackgroundImage(''));
  };

  return (
    <Card>
      <CardSubTitle>Background Color</CardSubTitle>
      <ColorpickerIcon
        color={backgroundColor}
        onChangeBackgroundcolor={handleChangeBackgroundcolor}
        onChangeAlpha={handleChangeAlpha}
      />
      <CardSubTitle>Background Image</CardSubTitle>
      <ImageFile
        onChange={handleChangeFile}
        onClick={handleClickDelete}
      />
    </Card>
  );
};

export default BackgroundContainer;
