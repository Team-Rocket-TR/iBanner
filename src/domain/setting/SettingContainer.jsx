import React from 'react';

import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import SettingsIcon from '@material-ui/icons/Settings';
import ImageIcon from '@material-ui/icons/Image';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoneyIcon from '@material-ui/icons/Money';

import CustomTabs from 'components/tab/CustomTabs';

import DarkTheme from 'public/css/DarkTheme';
import LightTheme from 'public/css/LightTheme';

import {
  GeneralContainer,
  BackgroundContainer,
  TextContainer,
  SponsorContainer,
} from './containers';

const tabs = [
  { icon: <SettingsIcon />, label: '기본설정' },
  { icon: <ImageIcon />, label: '이미지' },
  { icon: <TextFieldsIcon />, label: '텍스트' },
  { icon: <FavoriteIcon />, label: '즐겨찾기' },
  { icon: <MoneyIcon />, label: '후원하기' },
];

const tabPanels = [
  { component: <GeneralContainer /> },
  { component: <BackgroundContainer /> },
  { component: <TextContainer /> },
  { component: '신규 기능 준비중...' },
  { component: <SponsorContainer /> },
];

export default function SettingContainer() {
  const theme = useSelector((state) => state.theme);

  const classes = makeStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#eeeeee',
    },
  })();

  return (
    <>
      {theme === 'light'
        ? <LightTheme />
        : <DarkTheme />}
      <Paper
        className={classes.root}
        square
      >
        <CustomTabs
          tabs={tabs}
          tabPanels={tabPanels}
        />
      </Paper>
    </>
  );
}
