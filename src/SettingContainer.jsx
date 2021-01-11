import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setTopic } from './slice';
import Topic from './Topic';
import ColorpickerIcon from './ColorpickerIcon';

const BannerContainer = () => {
  const dispatch = useDispatch();
  const topic = useSelector((state) => state.topic);

  // 배너 색상 변경
  const handleClick = (selectedColor) => {
    dispatch(setColor(selectedColor));
  };

  // 배너 텍스트 변경
  const handleChange = ({ value }) => {
    dispatch(setTopic(value));
  };

  return (
    <>
      <input value={width} placeholder="Banner Width" />
      <input value={height} placeholder="Banner Height" />
      <input />
      <ColorpickerIcon onClick={handleClick} />
      <Topic
        topic={topic}
        onChange={handleChange}
      />
    </>
  );
};

export default BannerContainer;
