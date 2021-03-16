import React from 'react';

import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';

import FontFamily from './FontFamily';
import FontWeight from './FontWeight';

const FontStyle = ({
  defaultFontFamilyValue,
  defaultFontWeightValue,
  onChangeFontFamily,
  onChangeFontWeight,
}) => (
  <div>
    <Typography
      id="label-fontsize-slider"
      variant="h6"
      gutterBottom
    >
      글자 스타일
    </Typography>
    <Grid
      container
      spacing={1}
      alignItems="center"
    >
      <Grid item>
        <FontFamily
          defaultValue={defaultFontFamilyValue}
          onChange={onChangeFontFamily}
        />
      </Grid>
      <Grid item xs>
        <FontWeight
          defaultValue={defaultFontWeightValue}
          onChange={onChangeFontWeight}
        />
      </Grid>
    </Grid>
  </div>
);

export default FontStyle;
