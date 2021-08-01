import React from 'react';

import styled from 'styled-components';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

export default function CustomPanel({
  children,
  value,
  index,
}) {
  return (
    <CustomTabPanel
      role="tabpanel"
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      hidden={value !== index}
    >
      {value === index && (
        <Box p={3}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </CustomTabPanel>
  );
}
