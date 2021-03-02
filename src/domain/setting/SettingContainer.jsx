import React from 'react';

import { useSelector } from 'react-redux';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import SettingsIcon from '@material-ui/icons/Settings';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GetAppIcon from '@material-ui/icons/GetApp';

import styled from 'styled-components';

import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

import { GeneralContainer, BackgroundContainer, ContentContainer } from '.';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#eeeeee',
  },
});

const CustomTabPanel = styled.article`
  position: absolute;
  top: 60px;
  right: 80px;
  width: 340px;
  height: calc(100vh - 60px);
  background: #fff;
  padding: 0;
  & > div {
    padding: 1em;
  }
`;

const TabPanel = (props) => {
  const {
    children, value, index,
  } = props;

  return (
    <CustomTabPanel
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      hidden={value !== index}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </CustomTabPanel>
  );
};

const CustomTab = withStyles((theme) => ({
  root: {
    minWidth: '82px',
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab {...props} />);

const SettingContainer = () => {
  const theme = useSelector((state) => state.theme);

  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {(theme === 'light')
        ? <LightTheme />
        : <DarkTheme />}
      <Paper square className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          indicatorColor="secondary"
          textColor="secondary"
          aria-label="icon label tabs example"
          value={value}
          onChange={handleChange}
        >
          <CustomTab icon={<SettingsIcon />} label="기본설정" />
          <CustomTab icon={<ImageIcon />} label="배경화면" />
          <CustomTab icon={<TextFieldsIcon />} label="텍스트" />
          <CustomTab icon={<FavoriteIcon />} label="즐겨찾기" />
          <CustomTab icon={<GetAppIcon />} label="다운로드" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <GeneralContainer />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BackgroundContainer />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ContentContainer />
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
      </Paper>
    </>
  );
};

export default SettingContainer;
