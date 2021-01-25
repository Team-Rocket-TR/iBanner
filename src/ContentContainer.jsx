import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContent, setFontSize, setFontColor } from './slice';

import Content from './Content';
import FontSize from './FontSize';
import ColorpickerIcon from './ColorpickerIcon';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const fontSize = useSelector((state) => state.fontSize);
  const fontColor = useSelector((state) => state.fontColor);

  const handleTitleChange = ({ value }) => {
    dispatch(setContent(value));
  };

  const handleFontSizeChange = ({ value }) => {
    dispatch(setFontSize(value));
  };

  const handleChangeColor = (color) => {
    dispatch(setFontColor(color.hex));
  };

  return (
    <div>
      <h4>Text Color</h4>
      <Content onChange={handleTitleChange} />
      <FontSize fontSize={fontSize} onChange={handleFontSizeChange} />
      <ColorpickerIcon color={fontColor} handleChangeComplete={handleChangeColor} />
    </div>
  );
};

export default ContentContainer;
