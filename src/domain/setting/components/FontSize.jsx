import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const isNumber = (value) => value || /^[0-9\b]+$/.test(value);

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    marginTop: '10px',
    marginBottom: '20px',
    '& .MuiSlider-markLabel': {
      top: '-16px',
    },
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -12,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
    '& .MuiSlider-valueLabel': {
      top: '40px',
      left: 'calc(-50% + 6px)',
      '& .PrivateValueLabel-circle-19': {
        transform: 'rotate(135deg)',
      },
      '& .PrivateValueLabel-label-20': {
        transform: 'rotate(-135deg)',
      },
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

const marks = [
  {
    value: 12,
    label: '12',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 24,
    label: '24',
  },
  {
    value: 32,
    label: '32',
  },
  {
    value: 48,
    label: '48',
  },
  {
    value: 80,
    label: '80',
  },
];

const FontSize = ({ defaultValue, onChange }) => {
  function handleChange(_, value) {
    if (!isNumber(value)) return;

    onChange({ value });
  }

  return (
    <>
      <Typography id="label-fontsize-slider" gutterBottom>
        글자 크기
      </Typography>
      <AirbnbSlider
        step={2}
        min={10}
        max={80}
        valueLabelDisplay="auto"
        aria-labelledby="label-fontsize-slider"
        defaultValue={defaultValue}
        marks={marks}
        onChangeCommitted={handleChange}
      />
    </>
  );
};

export default FontSize;
