import React from 'react';
import PreviewContainer from './PreviewContainer';
import SettingContainer from './SettingContainer';
import TopicContainer from './TopicContainer';

const BannerMaker = () => (
  <>
    <h2>Banner Maker</h2>
    {/* 미리보기 */}
    <PreviewContainer />
    {/* 설정 */}
    <SettingContainer />
    {/* 다운로드 */}
    <TopicContainer />
  </>
);

export default BannerMaker;
