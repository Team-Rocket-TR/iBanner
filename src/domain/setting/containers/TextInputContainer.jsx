import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { setContent } from 'slice';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyle = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    bottom: '1.5em',
    width: '500px',
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
}));

const TextInputContainer = () => {
  const dispatch = useDispatch();
  const {
    contents,
    selectedContentId,
  } = useSelector((state) => state.contentLayer);

  const contentProperties = contents.find(({ id }) => id === selectedContentId);

  const handleChange = (event) => {
    const { value } = event.target;

    const index = contents.findIndex(({ id }) => id === selectedContentId);
    const content = {
      ...contentProperties,
      content: value,
    };

    dispatch(setContent({
      index,
      content,
    }));
  };

  const classes = useStyle();

  return (
    <div
      className={classes.root}
      autoComplete="off"
      noValidate
    >
      <TextField
        label="제목"
        value={contentProperties.content}
        onChange={handleChange}
        rowsMax={3.4}
        variant="outlined"
        multiline
      />
    </div>
  );
};

export default TextInputContainer;
