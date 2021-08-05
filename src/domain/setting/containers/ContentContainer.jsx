import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  setFontColor,
  setFontSize,
  setFontFamily,
  setFontWeight,
  setContentPosition,
} from 'slice';

import { Deck, Card } from 'components/card';

import FontColor from '../components/font/FontColor';
import FontSize from '../components/font/FontSize';
import FontStyle from '../components/font/FontStyle';
import ContentPosition from '../components/font/ContentPosition';

const ContentContainer = () => {
  const dispatch = useDispatch();

  const {
    contents,
    selectedContentId,
  } = useSelector((state) => state.contentLayer);

  if (!selectedContentId) {
    return (
      <>설정하고 싶은 글자를 선택해주세요!</>
    );
  }

  const contentIndex = contents.findIndex(({ id }) => id === selectedContentId);
  const contentProperties = contents.find(({ id }) => id === selectedContentId);
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
    const newContents = [
      ...contents.slice(0, contentIndex),
      newContent,
      ...contents.slice(contentIndex + 1),
    ];

    dispatch(setFontColor({ contents: newContents }));
  };

  const handleChangeFontSize = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontSize: value,
    };
    const newContents = [
      ...contents.slice(0, contentIndex),
      newContent,
      ...contents.slice(contentIndex + 1),
    ];

    dispatch(setFontSize({ contents: newContents }));
  };

  const handleChangeFontFamily = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontFamily: value,
    };
    const newContents = [
      ...contents.slice(0, contentIndex),
      newContent,
      ...contents.slice(contentIndex + 1),
    ];

    dispatch(setFontFamily({ contents: newContents }));
  };

  const handleChangeFontWeight = ({ value }) => {
    const newContent = {
      ...contentProperties,
      fontWeight: value,
    };
    const newContents = [
      ...contents.slice(0, contentIndex),
      newContent,
      ...contents.slice(contentIndex + 1),
    ];

    dispatch(setFontWeight({ contents: newContents }));
  };

  const handleChangeContentPosition = ({ value }) => {
    const newContent = {
      ...contentProperties,
      position: value,
    };
    const newContents = [
      ...contents.slice(0, contentIndex),
      newContent,
      ...contents.slice(contentIndex + 1),
    ];

    dispatch(setContentPosition({ contents: newContents }));
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
