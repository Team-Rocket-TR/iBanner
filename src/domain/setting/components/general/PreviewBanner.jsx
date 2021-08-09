import React from 'react';

import Typography from '@material-ui/core/Typography';

import ColorpickerIcon from '../common/ColorpickerIcon';

const PreviewBanner = ({ color, onChange }) => (
  <>
    <Typography variant="h6" gutterBottom>
      미리보기 배경 색상
    </Typography>
    <ColorpickerIcon
      color={color}
      onChangeBackgroundcolor={onChange}
    />
  </>
);

export default PreviewBanner;
