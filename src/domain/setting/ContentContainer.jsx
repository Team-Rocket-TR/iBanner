import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setFontColor, setFontSize, setFontStyle } from 'slice';

import { Deck, Card } from 'components/card';

import FontColor from './components/font/FontColor';
import FontSize from './components/font/FontSize';
import FontStyle from './components/font/FontStyle';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const fontColor = useSelector((state) => state.fontColor);
  const fontSize = useSelector((state) => state.fontSize);
  const fontStyle = useSelector((state) => state.fontStyle);

  const handleChangeColor = ({ rgb }) => {
    dispatch(setFontColor(rgb));
  };

  const handleChangeFontSize = ({ value }) => {
    dispatch(setFontSize(value));
  };

  const handleChangeFontStyle = ({ value }) => {
    dispatch(setFontStyle(value));
  };

  return (
    <Deck>
      <Card>
        <FontColor
          color={fontColor}
          onChange={handleChangeColor}
        />
      </Card>
      <Card>
        <FontSize
          defaultValue={fontSize}
          onChange={handleChangeFontSize}
        />
      </Card>
      <Card>
        <FontStyle
          defaultValue={fontStyle}
          onChange={handleChangeFontStyle}
        />
      </Card>
    </Deck>
  );
};

export default ContentContainer;
