import React from 'react';

import { useDispatch } from 'react-redux';

import { setContent, setFontColor } from './slice';

import Content from './Content';
import ColorpickerIcon from './ColorpickerIcon';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const handleChange = ({ value }) => {
    dispatch(setContent(value));
  };

  const handleClick = (selectedColor) => {
    dispatch(setFontColor(selectedColor));
  };

  return (
    <>
      <Content onChange={handleChange} />
      <ColorpickerIcon onClick={handleClick} />
    </>
  );
};

export default ContentContainer;
