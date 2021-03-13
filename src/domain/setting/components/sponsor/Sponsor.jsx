import React from 'react';

import kakaopayQRrcode from 'public/image/kakaopay_QRcode.png';

const Sponsor = () => (
  <div>
    <p id="sponsorText">카카오페이로 후원하기</p>
    <img id="sponsor" src={kakaopayQRrcode} alt="kakaopay" />
  </div>
);

export default Sponsor;
