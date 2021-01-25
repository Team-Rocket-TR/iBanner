import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBackgroundColor } from './slice';

import ColorpickerIcon from './ColorpickerIcon';

import Card from './component/Card';
import CardTitle from './component/CardTitle';

const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.backgroundColor);

  // Change banner background color
  const handleChangeComplete = (color) => {
    dispatch(setBackgroundColor(color.hex));
  };

  return (
    <Card>
      <CardTitle>Background Color</CardTitle>
      <ColorpickerIcon handleChangeComplete={handleChangeComplete} color={backgroundColor} />
    </Card>
  );
};

export default BackgroundContainer;
