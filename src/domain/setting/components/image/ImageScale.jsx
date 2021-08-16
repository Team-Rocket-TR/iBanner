import React from 'react';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';

import AspectRatioIcon from '@material-ui/icons/AspectRatio';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '-8px',
  },
}));

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
      '& > span': {
        transform: 'rotate(135deg)',
        '& > span': {
          transform: 'rotate(-135deg)',
        },
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
    value: 0,
    label: '0',
  },
  {
    value: 0.5,
    label: '0.5',
  },
  {
    value: 1,
    label: 'x1',
  },
  {
    value: 2,
    label: 'x2',
  },
  {
    value: 4,
    label: 'x4',
  },
];

const ImageScale = ({
  scale = 1,
  onChange,
}) => {
  const classes = useStyles();

  function handleChange(_, value) {
    onChange({ value });
  }

  return (
    <div>
      <Grid
        container
        spacing={1}
        alignItems="center"
      >
        <Grid item xs>
          <AirbnbSlider
            step={0.1}
            min={0}
            max={4}
            valueLabelDisplay="auto"
            key={`slider-${scale}`}
            defaultValue={Number(scale)}
            marks={marks}
            onChangeCompleteted={handleChange}
          />
        </Grid>
        <Grid item>
          <AspectRatioIcon
            className={classes.root}
            color="disabled"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ImageScale;
