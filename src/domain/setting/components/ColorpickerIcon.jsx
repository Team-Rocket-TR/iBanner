import React from 'react';
import { AlphaPicker, CompactPicker } from 'react-color';

const ColorpickerIcon = ({ color, onChangeBackgroundcolor, onChangeAlpha }) => {
  const colors = [
    '#f44336', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688',
    '#4caf50', '#8bc34a', '#ffee4b', '#ff9800', '#ffffff', '#000000',
  ];

  return (
    <>
      <CompactPicker
        colors={colors}
        color={color}
        onChange={onChangeBackgroundcolor}
      />
      <AlphaPicker
        color={color}
        width="100%"
        onChange={onChangeAlpha}
      />
    </>
  );
};
export default ColorpickerIcon;
