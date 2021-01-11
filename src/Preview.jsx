import React from 'react';
import styled from 'styled-components';

// background: skyblue;
const BannerImage = styled.div` 
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    
    justify-content: center;
    align-items: center;
    
    .bannerFont {
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;
    }
`;

const Preview = ({
  color, topic, selectedWidth, selectedHeight,
}) => {
  const divStyle = {
    color: 'white',
    background: color,
    width: selectedWidth,
    height: selectedHeight,
  };

  return (
    <BannerImage style={divStyle}>
      <div className="bannerFont">
        <p>{topic || '배너의 제목을 입력해주세요!'}</p>
      </div>
    </BannerImage>
  );
};

export default Preview;
