import React from 'react';

import { AlphaPicker, TwitterPicker } from 'react-color';

const ColorpickerIcon = ({ color, onChangeBackgroundcolor, onChangeAlpha }) => {
  const colors = [
    '#f44336', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688',
    '#4caf50', '#8bc34a', '#ffee4b', '#ff9800', '#ffffff', '#000000',
  ];

  return (
    <>
      <TwitterPicker
        color={color}
        colors={colors}
        triangle="hide"
        onChange={onChangeBackgroundcolor}
        width="100%"
      />
      {onChangeAlpha
        ? (
          <AlphaPicker
            color={color}
            onChange={onChangeAlpha}
            width="100%"
          />
        )
        : null}
    </>
  );
};
export default ColorpickerIcon;
