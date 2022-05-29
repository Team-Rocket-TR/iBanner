import React from 'react';

import { CompactPicker } from 'react-color';

const styles = {
  default: {
    Compact: {
      position: 'relative',
    },
    compact: {
      width: '100%',
      padding: '8px 0 0 8px',
      borderRadius: '0 0 4px 4px',
      input: {
        color: 'white',
      },
    },
  },
};

const emptyColors = [];

const InputColorPicker = ({ color, onChange }) => (
  <CompactPicker
    color={color}
    colors={emptyColors}
    onChange={onChange}
    styles={styles}
  />
);

export default InputColorPicker;
