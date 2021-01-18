import React from 'react';
import { BlockPicker } from 'react-color';

const ColorpickerIcon = ({ color, handleChangeComplete }) => (
  <BlockPicker
    color={color}
    onChangeComplete={handleChangeComplete}
  />
);
export default ColorpickerIcon;
