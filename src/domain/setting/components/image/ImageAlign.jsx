import React from 'react';

import Grid from '@material-ui/core/Grid';

import ImageAlignVertical from './ImageAlignVertical';
import ImageAlignHorizontal from './ImageAlignHorizontal';

const ImageAlign = ({
  verticalAlign,
  horizontalAlign,
  onChangeImageVerticalAlign,
  onChangeImageHorizontalAlign,
}) => (
  <Grid
    container
    spacing={1}
    alignItems="center"
  >
    <Grid item>
      <ImageAlignVertical
        defaultValue={verticalAlign}
        onChange={onChangeImageVerticalAlign}
      />
    </Grid>
    <Grid item>
      <ImageAlignHorizontal
        defaultValue={horizontalAlign}
        onChange={onChangeImageHorizontalAlign}
      />
    </Grid>
  </Grid>
);

export default ImageAlign;
