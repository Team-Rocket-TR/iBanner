import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import NativeSelect from '@material-ui/core/NativeSelect';

const options = [
  { value: 'center', label: '정중앙' },
  { value: 'custom', label: '사용자 지정' },
];

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
}));

const ContentPosition = () => {
  const classes = useStyles();

  function handleChange() {
    return null;
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
        value="center"
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
