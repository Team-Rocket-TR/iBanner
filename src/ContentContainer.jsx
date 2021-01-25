import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContent, setFontSize, setFontColor } from './slice';

import Content from './Content';
import FontSize from './FontSize';
import ColorpickerIcon from './ColorpickerIcon';

import Card from './component/Card';
import CardTitle from './component/CardTitle';

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
    <Card>
      <CardTitle>Text Color</CardTitle>
      <Content onChange={handleTitleChange} />
      <FontSize fontSize={fontSize} onChange={handleFontSizeChange} />
      <ColorpickerIcon color={fontColor} handleChangeComplete={handleChangeColor} />
    </Card>
  );
};

export default ContentContainer;
