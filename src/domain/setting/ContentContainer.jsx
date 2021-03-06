import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Card from 'components/card/Card';
import CardSubTitle from 'components/card/CardSubTitle';

import { setContent, setFontSize, setFontColor } from 'slice';

import Content from './components/Content';
import FontSize from './components/FontSize';
import ColorpickerIcon from './components/ColorpickerIcon';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const fontColor = useSelector((state) => state.fontColor);

  const handleChangeTitle = ({ value }) => {
    dispatch(setContent(value));
  };

  const handleChangeFontSize = ({ value }) => {
    dispatch(setFontSize(value));
  };

  const handleChangeColor = ({ rgb }) => {
    dispatch(setFontColor(rgb));
  };

  return (
    <Card>
      <CardSubTitle>Content</CardSubTitle>
      <Content onChange={handleChangeTitle} />
      {/* Font Color */}
      <CardSubTitle>Font Color</CardSubTitle>
      <ColorpickerIcon
        color={fontColor}
        onChangeBackgroundcolor={handleChangeColor}
      />
      {/* Font Size */}
      <FontSize
        defaultValue={14}
        onChange={handleChangeFontSize}
      />
    </Card>
  );
};

export default ContentContainer;
