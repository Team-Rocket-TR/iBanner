import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

import { isBlank } from 'utils';

const options = [
  { value: 'left', label: '왼쪽' },
  { value: 'center', label: '가운데' },
  { value: 'right', label: '오른쪽' },
];

const ImageAlignHorizontal = ({
  defaultValue = 'center',
  onChange,
}) => {
  const classes = makeStyles(() => ({
    root: {
      width: '100%',
    },
  }));

  function handleChange(event) {
    const { value } = event.target;
    if (isBlank(value)) {
      return;
    }

    onChange(value);
  }

  return (
    <>
      <NativeSelect
        className={classes.root}
        value={defaultValue}
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
      <FormHelperText>좌우정렬</FormHelperText>
    </>
  );
};

export default ImageAlignHorizontal;
