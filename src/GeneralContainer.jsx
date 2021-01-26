import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import BannerSizeButton from './BannerSizeButton';

import Card from './component/Card';
import CardTitle from './component/CardTitle';
import CardSubTitle from './component/CardSubTitle';

import {
  setWidth,
  setHeight,
  setWidthHeight,
} from './slice';

const Input = styled.input`
  width: 40%;
  margin-right: 0.5em;
  margin-top: 0.5em; 
  color: #363636;
`;

const BackgroundContainer = () => {
  const dispatch = useDispatch();

  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);

  const bannerRatios = [
    ['1:1', width, width],
    ['2:1', width, (width / 2)],
    ['4:3', width, Math.floor(width * (3 / 4))],
    ['16:9', width, Math.floor(width * (9 / 16))],
  ];

  // Custom Change banner width
  const handleWidthChange = (e) => {
    const bannerWidth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerWidth.test(e.target.value)) {
      dispatch(setWidth(e.target.value));
    }
  };

  // Custom Change banner heigth
  const handleHeightChange = (e) => {
    const bannerHeigth = /^[0-9\b]+$/;
    if (e.target.value === '' || bannerHeigth.test(e.target.value)) {
      dispatch(setHeight(e.target.value));
    }
  };

  // Change banner size (Resize by Ratio)
  const handleSizeChange = ({ w, h }) => {
    dispatch(setWidthHeight({ width: w, height: h }));
  };

  return (
    <Card>
      <CardTitle>General</CardTitle>
      {bannerRatios.map((props) => {
        const [ratio, w, h] = props;
        return (
          <BannerSizeButton
            width={w}
            height={h}
            ratio={ratio}
            key={ratio}
            onClick={handleSizeChange}
          />
        );
      })}
      <br />
      <CardSubTitle>Custom size</CardSubTitle>
      <Input type="text" name="width" value={width} maxLength="3" placeholder="Banner Width" onChange={handleWidthChange} />
      <Input type="text" name="height" value={height} maxLength="3" placeholder="Banner Height" onChange={handleHeightChange} />
    </Card>
  );
};

export default BackgroundContainer;
