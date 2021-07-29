import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { Deck, Card } from 'components/card';

import {
  setBackgroundColor,
  setAlpha,
  setUploadImage,
  setImageUri,
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

  const {
    image,
    scale,
  } = useSelector((state) => state.imageLayer);

  const backgroundColor = useSelector((state) => state.backgroundColor);

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

    const imageEl = document.createElement('img');
    imageEl.src = await window.URL.createObjectURL(file);

    imageEl.onload = () => {
      console.log(`width : ${imageEl.width} px`);
      console.log(`height : ${imageEl.height} px`);
      dispatch(setUploadImage({
        image: imageEl.src,
        width: imageEl.width,
        height: imageEl.height,
      }));
    };
    // dispatch(setImageUri(imageEl.src));
  };

  const handleClickDeleteImage = () => {
    dispatch(setImageUri(''));
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
        image={image}
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
