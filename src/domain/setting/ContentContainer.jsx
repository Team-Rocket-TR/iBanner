import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setFontSize, setFontColor } from 'slice';

import { Deck, Card } from 'components/card';

import FontSize from './components/font/FontSize';
import FontColor from './components/font/FontColor';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const fontColor = useSelector((state) => state.fontColor);

  const handleChangeFontSize = ({ value }) => {
    dispatch(setFontSize(value));
  };

  const handleChangeColor = ({ rgb }) => {
    dispatch(setFontColor(rgb));
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
          defaultValue={14}
          onChange={handleChangeFontSize}
        />
      </Card>
    </Deck>
  );
};

export default ContentContainer;
