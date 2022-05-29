import React from 'react';

import { TwitterPicker } from 'react-color';

const styles = {
  default: {
    card: {
      width: '100%',
      marginTop: '-6px',
      background: 'unset', // '#464646',
      border: 'unset', // '0 solid rgba(0,0,0,0.25)',
      boxShadow: 'unset', // '0 1px 4px rgba(0,0,0,0.25)',
      borderRadius: 'unset', // '4px 4px 0 0',
      position: 'relative',
    },
    body: {
      padding: '6px 4px',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
    },
    label: {
      fontSize: '18px',
      color: '#fff',
    },
    triangle: {
      width: '0px',
      height: '0px',
      borderStyle: 'solid',
      borderWidth: '0 9px 10px 9px',
      borderColor: 'transparent transparent #fff transparent',
      position: 'absolute',
    },
    triangleShadow: {
      width: '0px',
      height: '0px',
      borderStyle: 'solid',
      borderWidth: '0 9px 10px 9px',
      borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
      position: 'absolute',
    },
    hash: {
      display: 'none',
    },
    input: {
      display: 'none',
    },
    swatch: {
      width: '28px',
      height: '28px',
      float: 'left',
      outline: '.8px solid #999',
      borderRadius: '25px',
      margin: '0 6px 6px 0',
    },
    clear: {
      clear: 'both',
    },
  },
};

const colors = [
  '#f44336', '#e84b63', '#9c27b0', '#673ab7', '#3f51b5',
  '#2196f3', '#009688', '#4caf50', '#8bc34a', '#9bab9a',
  '#ff9800', '#ffee4b', '#795548', '#969696', '#ffffff',
  '#000000',
];

const QuickColorPicker = ({ color, onChange }) => (
  <TwitterPicker
    triangle="hide"
    color={color}
    colors={colors}
    onChange={onChange}
    styles={styles}
  />
);

export default QuickColorPicker;
