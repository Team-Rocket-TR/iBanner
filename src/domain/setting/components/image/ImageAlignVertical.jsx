import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import FormHelperText from '@material-ui/core/FormHelperText';
import NativeSelect from '@material-ui/core/NativeSelect';

import { isBlank } from 'utils';

const options = [
  { value: 'top', label: '위쪽' },
  { value: 'middle', label: '가운데' },
  { value: 'bottom', label: '아래쪽' },
];

const ImageAlignVertical = ({
  defaultValue = 'middle',
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
        name="image-align-vertical"
        inputProps={{ 'aria-label': 'image-align-vertical' }}
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
      <FormHelperText>상하정렬</FormHelperText>
    </>
  );
};

export default ImageAlignVertical;
