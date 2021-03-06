import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Deck, Card } from 'components/card';

import {
  setBackgroundColor, setAlpha, setBackgroundImage,
} from 'slice';

import Typography from '@material-ui/core/Typography';

import ColorpickerIcon from './components/common/ColorpickerIcon';
import ImageFile from './components/background/ImageFile';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);

  // CHange Banner BackgroundColor
  const handleChangeBackgroundcolor = ({ rgb }) => {
    dispatch(setBackgroundColor(rgb));
  };

  // Change RGB => a
  const handleChangeAlpha = ({ rgb }) => {
    const { a } = rgb;
    dispatch(setAlpha(a));
  };

  const handleChangeFile = async ({ file }) => {
    if (!file) return;

    const image = file;
    const localImageURL = await window.URL.createObjectURL(image);

    dispatch(setBackgroundImage(localImageURL));
  };

  const handleClickDelete = () => {
    dispatch(setBackgroundImage(''));
  };

  return (
    <Deck>
      <Card>
        <Typography
          id="label-fontsize-slider"
          variant="h6"
          gutterBottom
        >
          배경 색상
        </Typography>
        <ColorpickerIcon
          color={backgroundColor}
          onChangeBackgroundcolor={handleChangeBackgroundcolor}
          onChangeAlpha={handleChangeAlpha}
        />
      </Card>
      <Card>
        <ImageFile
          onChange={handleChangeFile}
          onClick={handleClickDelete}
        />
      </Card>
    </Deck>
  );
};

export default BackgroundContainer;
