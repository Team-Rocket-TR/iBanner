import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBackgroundColor } from './slice';

import ColorpickerIcon from './ColorpickerIcon';

const BackgroundContainer = () => {
  const dispatch = useDispatch();
  const backgroundColor = useSelector((state) => state.backgroundColor);

  // Change banner background color
  const handleChangeComplete = (color) => {
    dispatch(setBackgroundColor(color.hex));
  };

  return (
    <div>
      <h4>Background Color</h4>
      <ColorpickerIcon handleChangeComplete={handleChangeComplete} color={backgroundColor} />
    </div>
  );
};

export default BackgroundContainer;
