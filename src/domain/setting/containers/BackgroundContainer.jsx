import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { Deck, Card } from 'components/card';

import {
  setBackgroundColor,
  setAlpha,
  setBackgroundImage,
  setImageScale,
} from 'slice';

import {
  ColorpickerIcon,
  AlphaPickerIcon,
  ImageFile,
  ImageScale,
} from '../components';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const backgroundColor = useSelector((state) => state.backgroundColor);

  const backgroundImage = useSelector((state) => state.backgroundImage);
  const { scale } = useSelector((state) => state.imageLayer);

  // Change Banner BackgroundColor
  const handleChangeBackgroundcolor = ({ rgb }) => {
    dispatch(setBackgroundColor(rgb));
  };

  // Change RGB => a
  const handleChangeAlpha = ({ rgb }) => {
    const { a } = rgb;
    dispatch(setAlpha(a));
  };

  const handleUploadImage = async ({ file }) => {
    if (!file) {
      return;
    }

    const localImageURL = await window.URL.createObjectURL(file);
    // const image = document.createElement('img');

    // image.src = localImageURL;

    // image.onload = function () {
    //   console.log(`width : ${image.width} px`);
    //   console.log(`height : ${image.height} px`);
    // };
    dispatch(setBackgroundImage(localImageURL));
  };

  const handleClickDeleteImage = () => {
    dispatch(setBackgroundImage(''));
  };

  const handleChangeImageScale = ({ value }) => {
    dispatch(setImageScale(value));
  };

  const backgroundSettings = [
    {
      title: '배경 색상',
      component: <ColorpickerIcon
        color={backgroundColor}
        onChangeBackgroundcolor={handleChangeBackgroundcolor}
      />,
    },
    {
      title: '배경 투명도',
      component: <AlphaPickerIcon
        color={backgroundColor}
        onChangeAlpha={handleChangeAlpha}
      />,
    },
    {
      title: '이미지 삽입',
      component: <ImageFile
        image={backgroundImage}
        onChange={handleUploadImage}
        onClick={handleClickDeleteImage}
      />,
    },
    {
      title: '이미지 배율',
      component: <ImageScale
        scale={scale}
        onChange={handleChangeImageScale}
      />,
    },
  ];

  return (
    <Deck>
      {backgroundSettings.map(({ title, component }) => (
        <Card key={title}>
          <Typography
            variant="h6"
            gutterBottom
          >
            {title}
          </Typography>
          {component}
        </Card>
      ))}
    </Deck>
  );
};

export default BackgroundContainer;
