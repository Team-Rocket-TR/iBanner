import React from 'react';

import Fab from '@material-ui/core/Fab';
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Complete = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab
      aria-label="Complete"
      variant="extended"
      color="primary"
      className={classes.margin}
      onClick={onClick}
    >
      <DoneOutlineIcon className={classes.extendedIcon} />
      완료
    </Fab>
  );
};

export default Complete;
