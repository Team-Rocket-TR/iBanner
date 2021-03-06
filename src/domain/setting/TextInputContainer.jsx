import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContent } from 'slice';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const TextInputContainer = () => {
  const dispatch = useDispatch();

  const bannerWidth = useSelector((state) => state.width);
  const content = useSelector((state) => state.content);

  const handleChange = (event) => {
    const { value } = event.target;
    dispatch(setContent(value));
  };

  const classes = makeStyles((theme) => ({
    root: {
      position: 'absolute',
      bottom: '1.5em',
      width: `${bannerWidth}px`,
      '& .MuiTextField-root': {
        margin: `${theme.spacing(1)}px 0`,
        width: '100%',
        backgroundColor: '#eeeeee',
        borderRadius: '8px',
        '& .MuiInputLabel-formControl': {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
        },
        '& .MuiInputLabel-outlined': {
          textAlign: 'center',
          transform: 'translate(0, 20px) scale(1)',
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
          fontSize: '1em',
          transform: 'translate(0, -6px)',
        },
        '& textarea, legend': {
          textAlign: 'center',
        },
      },
    },
  }))();

  return (
    <div
      className={classes.root}
      autoComplete="off"
      noValidate
    >
      <TextField
        id="filled-multiline-flexible"
        label="제목"
        multiline
        rowsMax={3.4}
        value={content}
        onChange={handleChange}
        variant="outlined"
      />
    </div>
  );
};

export default TextInputContainer;
