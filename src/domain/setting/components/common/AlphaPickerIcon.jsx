import React from 'react';

import { AlphaPicker } from 'react-color';

const AlphaPickerIcon = ({
  color, onChangeAlpha,
}) => (
  <>
    {onChangeAlpha
      ? (
        <AlphaPicker
          color={color}
          onChange={onChangeAlpha}
          width="100%"
        />
      )
      : null}
  </>
);
export default AlphaPickerIcon;
