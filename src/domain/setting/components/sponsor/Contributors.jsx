import React from 'react';

import Typography from '@material-ui/core/Typography';

const Contributors = () => (
  <>
    <Typography
      variant="h6"
      gutterBottom
    >
      기여자
    </Typography>
    <div>
      <p>Kim Raeyoung & Kim Taewoong</p>
    </div>
    <div id="contributors_info">
      <a href="https://github.com/raeyoung">
        <img id="github-logo" src="/image/github_logo.png" alt="github" />
        Github
      </a>
      <a href="https://github.com/TaeWoongKim2">
        <img id="github-logo" src="/image/github_logo.png" alt="github" />
        Github
      </a>
    </div>
  </>
);

export default Contributors;
