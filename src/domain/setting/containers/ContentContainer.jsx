import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setFontColor,
  setFontSize,
  setFontFamily,
  setFontWeight,
} from 'slice';

import { Deck, Card } from 'components/card';

import FontColor from '../components/font/FontColor';
import FontSize from '../components/font/FontSize';
import FontStyle from '../components/font/FontStyle';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const {
    contents,
    selectedContentId,
  } = useSelector((state) => state.contentLayer);

  const contentProperties = contents.find(({ id }) => id === selectedContentId);
  const {
    fontColor,
    fontSize,
    fontFamily,
    fontWeight,
  } = contentProperties;

  // const fontSize = useSelector((state) => state.fontSize);
  // const fontFamily = useSelector((state) => state.fontFamily);
  // const fontWeight = useSelector((state) => state.fontWeight);

  const handleChangeColor = ({ rgb }) => {
    const index = contents.findIndex(({ id }) => id === selectedContentId);
    const newContent = {
      ...contentProperties,
      fontColor: rgb,
    };
    const newContents = [
      ...contents.slice(0, index),
      newContent,
      ...contents.slice(index + 1),
    ];

    dispatch(setFontColor({ contents: newContents }));
  };

  const handleChangeFontSize = ({ value }) => {
    dispatch(setFontSize(value));
  };

  const handleChangeFontFamily = ({ value }) => {
    dispatch(setFontFamily(value));
  };

  const handleChangeFontWeight = ({ value }) => {
    dispatch(setFontWeight(value));
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
          defaultFontFamilyValue={fontFamily}
          defaultFontWeightValue={fontWeight}
          onChangeFontFamily={handleChangeFontFamily}
          onChangeFontWeight={handleChangeFontWeight}
        />
      </Card>
    </Deck>
  );
};

export default ContentContainer;
