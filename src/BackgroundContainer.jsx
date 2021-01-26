import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBackgroundColor } from './slice';

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

  async function handleFileChange({ file }) {
    if (!file) return;

    const image = file;
    const reader = new FileReader();

    reader.onload = function (e) {
      console.log(e.target.result);
    };

    await reader.readAsDataURL(image);
  }

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
