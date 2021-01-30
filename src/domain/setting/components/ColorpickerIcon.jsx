import React from 'react';
import { CirclePicker, MaterialPicker } from 'react-color';

const ColorpickerIcon = ({ color, handleChangeComplete }) => {
  const colors = [
    '#f44336', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#009688',
    '#4caf50', '#8bc34a', '#ffee4b', '#ff9800', '#ffffff', '#000000',
  ];

  return (
    <>
      <CirclePicker
        colors={colors}
        onChangeComplete={handleChangeComplete}
      />
      <MaterialPicker
        color={color}
        onChangeComplete={handleChangeComplete}
      />
    </>
  );
};
export default ColorpickerIcon;
