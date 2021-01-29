import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card/Card';
import CardTitle from 'components/card/CardTitle';
import CardSubTitle from 'components/card/CardSubTitle';

import { setBackgroundColor, setBackgroundImage } from 'slice';

import ColorpickerIcon from './ColorpickerIcon';
import ImageFile from './ImageFile';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const handleChangeComplete = (color) => {
    dispatch(setBackgroundColor(color.hex));
  };

  const handleFileChange = async ({ file }) => {
    if (!file) return;

    const image = file;
    const localImageURL = await window.URL.createObjectURL(image);

    dispatch(setBackgroundImage(localImageURL));
  };

  return (
    <Card>
      <CardTitle>Background</CardTitle>

      <CardSubTitle>Background Color</CardSubTitle>
      <ColorpickerIcon handleChangeComplete={handleChangeComplete} color={backgroundColor} />

      <CardSubTitle>Background Image</CardSubTitle>
      <ImageFile onChange={handleFileChange} />
    </Card>
  );
};

export default BackgroundContainer;
