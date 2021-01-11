import React from 'react';
import { useDispatch } from 'react-redux';
import { setColor, setContent } from './slice';

import Topic from './Content';
import ColorpickerIcon from './ColorpickerIcon';

const BannerContainer = () => {
  const dispatch = useDispatch();

  // 배너 색상 변경
  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  // 배너 텍스트 변경
  const handleChange = ({ value }) => {
    dispatch(setContent(value));
  };

  return (
    <>
      <ColorpickerIcon onClick={handleClick} />
      <Topic onChange={handleChange} />
    </>
  );
};

export default BannerContainer;
