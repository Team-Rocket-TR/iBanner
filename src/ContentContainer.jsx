import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContent, setFontColor } from './slice';

import Content from './Content';
import ColorpickerIcon from './ColorpickerIcon';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const fontColor = useSelector((state) => state.fontColor);

  const handleChange = ({ value }) => {
    dispatch(setContent(value));
  };

  const handleChangeColor = (color) => {
    dispatch(setFontColor(color.hex));
  };

  return (
    <>
      <Content onChange={handleChange} />
      <ColorpickerIcon handleChangeComplete={handleChangeColor} color={fontColor} />
    </>
  );
};

export default ContentContainer;
