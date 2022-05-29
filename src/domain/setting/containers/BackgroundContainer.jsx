import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { Deck, Card } from 'components/card';

import {
  setUploadImage,
  setImageUri,
  setImageScale,
  setImageVerticalAlign,
  setImageHorizontalAlign,
  setFilterBackgroundColor,
  setFilterBackgroundColorAlpha,
} from 'slice';

import {
  CombinedColorPicker,
  AlphaPickerIcon,
  ImageFile,
  ImageAlign,
  ImageScale,
} from '../components';

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const {
    image,
    scale,
    alignX,
    alignY,
  } = useSelector((state) => state.imageLayer);

  const {
    backgroundColor,
  } = useSelector((state) => state.filterLayer);

  // Change Banner BackgroundColor
  const handleChangeFilterBackgroundColor = ({ rgb }) => {
    dispatch(setFilterBackgroundColor(rgb));
  };

  // Change RGB => a
  const handleChangeFilterBackgroundColorAlpha = ({ rgb }) => {
    const { a } = rgb;
    dispatch(setFilterBackgroundColorAlpha(a));
  };

  const handleUploadImage = async ({ file }) => {
    if (!file) {
      return;
    }

    const imageEl = document.createElement('img');
    imageEl.src = await window.URL.createObjectURL(file);
    imageEl.onload = () => {
      dispatch(setUploadImage({
        image: imageEl.src,
        sizeX: imageEl.width,
        sizeY: imageEl.height,
      }));
    };
  };

  const handleClickDeleteImage = () => {
    dispatch(setImageUri(''));
  };

  const handleChangeImageScale = ({ value }) => {
    dispatch(setImageScale(value));
  };

  const handleChangeImageVerticalAlign = (align) => {
    dispatch(setImageVerticalAlign(align));
  };

  const handleChangeImageHorizontalAlign = (align) => {
    dispatch(setImageHorizontalAlign(align));
  };

  const backgroundSettings = [
    {
      title: '필터 색상',
      component: (
        <CombinedColorPicker
          color={backgroundColor}
          onChange={handleChangeFilterBackgroundColor}
        />
      ),
    },
    {
      title: '필터 투명도',
      component: (
        <AlphaPickerIcon
          color={backgroundColor}
          onChangeAlpha={handleChangeFilterBackgroundColorAlpha}
        />
      ),
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
      component: <ImageScale scale={scale} onChange={handleChangeImageScale} />,
    },
    {
      title: '이미지 정렬',
      component: <ImageAlign
        verticalAlign={alignY}
        horizontalAlign={alignX}
        onChangeImageVerticalAlign={handleChangeImageVerticalAlign}
        onChangeImageHorizontalAlign={handleChangeImageHorizontalAlign}
      />,
    },
  ];

  return (
    <Deck>
      {backgroundSettings.map(({ title, component }) => (
        <Card key={title}>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          {component}
        </Card>
      ))}
    </Deck>
  );
};

export default BackgroundContainer;
