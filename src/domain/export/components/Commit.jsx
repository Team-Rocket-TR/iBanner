import React from 'react';

import Fab from '@material-ui/core/Fab';
import GetAppIcon from '@material-ui/icons/GetApp';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Download = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Fab
      aria-label="save"
      variant="extended"
      color="secondary"
      className={classes.margin}
      onClick={onClick}
    >
      <GetAppIcon className={classes.extendedIcon} />
      다운로드
    </Fab>
  );
};

export default Download;
