import React from 'react';

import Typography from '@material-ui/core/Typography';

import CombinedColorPicker from '../common/CombinedColorPicker';

const FontColor = ({ color, onChange }) => (
  <>
    <Typography
      id="label-fontsize-slider"
      variant="h6"
      gutterBottom
    >
      글자 색상
    </Typography>
    <CombinedColorPicker
      color={color}
      onChange={onChange}
    />
  </>
);

export default FontColor;
