import React from 'react';

import Typography from '@material-ui/core/Typography';

const Sponsor = () => (
  <div>
    <Typography
      variant="h6"
      gutterBottom
    >
      후원하기 (카카오페이)
    </Typography>
    <img id="sponsor" src="/image/kakaopay_QRcode.png" alt="kakaopay" />
  </div>
);

export default Sponsor;
