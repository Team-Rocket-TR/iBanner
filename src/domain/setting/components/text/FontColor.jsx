import React from 'react';

import Typography from '@material-ui/core/Typography';

import ColorpickerIcon from '../common/ColorpickerIcon';

const FontColor = ({ color, onChange }) => (
  <>
    <Typography
      id="label-fontsize-slider"
      variant="h6"
      gutterBottom
    >
      글자 색상
    </Typography>
    <ColorpickerIcon
      color={color}
      onChangeBackgroundcolor={onChange}
    />
  </>
);

export default FontColor;
