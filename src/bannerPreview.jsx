import React from 'react';
import styled from 'styled-components';

const BannerImage = styled.div`
    background: skyblue;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    width: 500px;
    height: 500px;
    justify-content: center;
    align-items: center;
    
    .bannerFont {
        height: 90%;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const BannerPreview = () => (
  <BannerImage>
    <div className="bannerFont">
      <p>Text</p>
    </div>
  </BannerImage>

);

export default BannerPreview;
