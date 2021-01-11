import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setColor, setContent, setWidth, setHeight,
} from './slice';
import Content from './Content';
import ColorpickerIcon from './ColorpickerIcon';

const BannerContainer = () => {
  const dispatch = useDispatch();
  const width = useSelector((state) => state.width);
  const height = useSelector((state) => state.height);
  // 배너 색상 변경
  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  // 배너 텍스트 변경
  const handleChange = ({ value }) => {
    dispatch(setContent(value));
  };

  const handleWidthChange = (e) => {
    dispatch(setWidth(e.target.value));
  };
  const handleHeightChange = (e) => {
    dispatch(setHeight(e.target.value));
  };

  return (
    <>
      <input type="text" name="width" value={width} placeholder="Banner Width" onChange={handleWidthChange} />
      <input type="text" name="height" value={height} placeholder="Banner Height" onChange={handleHeightChange} />
      <ColorpickerIcon onClick={handleClick} />
      <Content onChange={handleChange} />
    </>
  );
};

export default BannerContainer;
