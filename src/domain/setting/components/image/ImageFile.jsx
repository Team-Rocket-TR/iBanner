import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  input: {
    display: 'none',
  },
  label: {
    display: 'unset',
  },
}));

const ImageFile = ({ onChange, onClick }) => {
  const classes = useStyles();

  function handleChange(event) {
    const file = event.target.files[0];
    onChange({ file });
  }

  return (
    <>
      <Typography
        id="label-fontsize-slider"
        variant="h6"
        gutterBottom
      >
        배경 이미지 삽입
      </Typography>
      <input
        className={classes.input}
        id="contained-button-file"
        type="file"
        accept="image/*"
        onChange={handleChange}
      />
      <label
        className={classes.label}
        htmlFor="contained-button-file"
      >
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<PhotoCamera />}
        >
          Upload
        </Button>
      </label>

      <IconButton
        className={classes.margin}
        aria-label="delete"
        onClick={onClick}
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </>
  );
};

export default ImageFile;
