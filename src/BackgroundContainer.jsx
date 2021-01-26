import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setBackgroundColor, setBackgroundImage } from './slice';

import ColorpickerIcon from './ColorpickerIcon';
import ImageFile from './ImageFile';

import Card from './component/Card';
import CardTitle from './component/CardTitle';
import CardSubTitle from './component/CardSubTitle';

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
