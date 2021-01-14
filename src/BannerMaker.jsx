import React from 'react';
import PreviewContainer from './PreviewContainer';
import BackgroundContainer from './BackgroundContainer';
import ContentContainer from './ContentContainer';

const BannerMaker = () => (
  <>
    <h2>Banner Maker</h2>
    {/* 미리보기 */}
    <PreviewContainer />
    {/* 설정 */}
    <BackgroundContainer />
    <ContentContainer />
    {/* 다운로드 */}

  </>
);

export default BannerMaker;
