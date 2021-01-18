import React from 'react';
// import styled from 'styled-components';
import { BlockPicker } from 'react-color';

// const BannerPaintingBtn = styled.div`
//   display: -webkit-flex;
//   justify-content: center;
//   padding-top: 1rem;
// `;

const ColorpickerIcon = ({ color, handleChangeComplete }) => (
  <BlockPicker
    color={color}
    onChangeComplete={handleChangeComplete}
  />
);

// <BannerPaintingBtn>
//   <button type="button" onClick={() => onClick('pink')}>pink</button>
//   <button type="button" onClick={() => onClick('blue')}>blue</button>
//   <button type="button" onClick={() => onClick('red')}>red</button>
//   <button type="button" onClick={() => onClick('black')}>black</button>
// </BannerPaintingBtn>

export default ColorpickerIcon;
