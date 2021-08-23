import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import PhotoIcon from '@material-ui/icons/Photo';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import TextFieldsIcon from '@material-ui/icons/TextFields';

import VisibilityIcon from '@material-ui/icons/Visibility';
// import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
  listItem: {
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

const BannerLayers = () => {
  const classes = useStyles();

  const layers = [
    {
      id: 0,
      title: '이미지 레이어',
      subtitle: 'Image layer',
      icon: <PhotoIcon />,
    },
    {
      id: 1,
      title: '필터 레이어',
      subtitle: 'Filter layer',
      icon: <PhotoFilterIcon />,
    },
    {
      id: 2,
      title: '텍스트 레이어',
      subtitle: 'Text layer',
      icon: <TextFieldsIcon />,
    },
  ];

  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
      >
        배너 레이어
      </Typography>
      <List className={classes.root}>
        {layers.map(({
          id, icon, title, subtitle,
        }) => (
          <ListItem
            key={id}
            className={classes.listItem}
          >
            <ListItemAvatar>
              <Avatar>
                {icon}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={title}
              secondary={subtitle}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="hide"
              >
                <VisibilityIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BannerLayers;
