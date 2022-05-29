import React from 'react';

import QuickColorPicker from './colorpickers/QuickColorPicker';
import InputColorPicker from './colorpickers/InputColorPicker';

const CombinedColorPicker = ({ color, onChange }) => (
  <>
    <QuickColorPicker
      color={color}
      onChange={onChange}
    />
    <InputColorPicker
      color={color}
      onChange={onChange}
    />
  </>
);

export default CombinedColorPicker;
