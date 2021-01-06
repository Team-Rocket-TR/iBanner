import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundColorpicker from './BackgroundColorpicker';

const BannerPaintingBtn = styled.div`
  display: -webkit-flex;
  justify-content: center;
  padding-top: 1rem;
`;

const ColorpickerIcon = ({ bannerBackgroundColor, colorpickerHandler }) => {
  const [colorpicker, setColorpicker] = useState(false);

  // banner painting 버튼 클릭했을 때 핸들러
  const handleBannerColor = () => {
    setColorpicker(!colorpicker);
  };

  const handleColorChange = (colors, event) => {
    colorpickerHandler({ ...colors, event });
  };

  return (
    <BannerPaintingBtn>
      <button type="button" onClick={() => handleBannerColor()}>banner Painting</button>
      {colorpicker && (
        <BackgroundColorpicker
          color={bannerBackgroundColor}
          onChangeComplete={handleColorChange}
          onChange={handleColorChange}
        />
      )}
    </BannerPaintingBtn>
  );
};

export default ColorpickerIcon;
