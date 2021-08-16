import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setFontColor,
  setFontSize,
  setFontFamily,
  setFontWeight,
  setTextPosition,
} from 'slice';

import { Deck, Card } from 'components/card';

import FontColor from '../components/font/FontColor';
import FontSize from '../components/font/FontSize';
import FontStyle from '../components/font/FontStyle';
import ContentPosition from '../components/font/ContentPosition';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const {
    texts,
    selectedTextId,
  } = useSelector((state) => state.textLayer);

  if (!selectedTextId) {
    return (
      <>설정하고 싶은 글자를 선택해주세요!</>
    );
  }

  const contentIndex = texts.findIndex(({ id }) => id === selectedTextId);
  const contentProperties = texts.find(({ id }) => id === selectedTextId);
  const {
    fontColor,
    fontSize,
    fontFamily,
    fontWeight,
    position,
  } = contentProperties;

  const handleChangeColor = ({ rgb }) => {
    const newContent = {
      ...contentProperties,
      fontColor: rgb,
    };
    const newtexts = [
      ...texts.slice(0, contentIndex),
      newContent,
      ...texts.slice(contentIndex + 1),
    ];

    dispatch(setFontColor({ texts: newtexts }));
  };

  const handleChangeFontSize = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontSize: value,
    };
    const newtexts = [
      ...texts.slice(0, contentIndex),
      newContent,
      ...texts.slice(contentIndex + 1),
    ];

    dispatch(setFontSize({ texts: newtexts }));
  };

  const handleChangeFontFamily = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontFamily: value,
    };
    const newtexts = [
      ...texts.slice(0, contentIndex),
      newContent,
      ...texts.slice(contentIndex + 1),
    ];

    dispatch(setFontFamily({ texts: newtexts }));
  };

  const handleChangeFontWeight = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontWeight: value,
    };
    const newtexts = [
      ...texts.slice(0, contentIndex),
      newContent,
      ...texts.slice(contentIndex + 1),
    ];

    dispatch(setFontWeight({ texts: newtexts }));
  };

  const handleChangeContentPosition = ({ value }) => {
    const newContent = {
      ...contentProperties,
      position: value,
    };
    const newtexts = [
      ...texts.slice(0, contentIndex),
      newContent,
      ...texts.slice(contentIndex + 1),
    ];

    dispatch(setTextPosition({ texts: newtexts }));
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
      <Card>
        <ContentPosition
          position={position}
          onChange={handleChangeContentPosition}
        />
      </Card>
    </Deck>
  );
};

export default ContentContainer;
