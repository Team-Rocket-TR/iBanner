import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';

const options = [
  { value: 'custom', label: '사용자 지정' },
  { value: 'center', label: '정중앙' },
];

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const ContentPosition = ({
  position,
  onChange,
}) => {
  const classes = useStyles();

  function handleChange(event) {
    const { value } = event.target;
    onChange({ value });
  }

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
      >
        글자 위치
      </Typography>
      <NativeSelect
        className={classes.root}
        value={position}
        onChange={handleChange}
        name="image-align-horizontal"
        inputProps={{ 'aria-label': 'image-align-horizontal' }}
      >
        {options.map(({ value, label }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </NativeSelect>
    </>
  );
};

export default ContentPosition;
