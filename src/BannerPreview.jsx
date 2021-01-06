import React from 'react';
import styled from 'styled-components';

// background: skyblue;
const BannerImage = styled.div` 
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
    
    .bannerFont {
        font-size: 1.5rem;
        align-items: center;
        justify-content: center;
    }
`;

const BannerPreview = ({ color }) => {
  const divStyle = {
    color: 'white',
    background: color,
  };

  return (
    <BannerImage style={divStyle}>
      <div className="bannerFont">
        <p>Text</p>
      </div>
    </BannerImage>
  );
};

export default BannerPreview;
