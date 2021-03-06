import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const isNumber = (value) => value || /^[0-9\b]+$/.test(value);

const styles = {
  label: {
    display: 'none',
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

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
      <Slider
        step={2}
        min={10}
        max={80}
        defaultValue={defaultValue}
        aria-labelledby="label-fontsize-slider"
        valueLabelDisplay="auto"
        marks={marks}
        onChangeCommitted={handleChange}
      />
    </>
  );
};

export default FontSize;
