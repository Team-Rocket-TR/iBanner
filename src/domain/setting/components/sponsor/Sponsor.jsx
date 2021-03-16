import React from 'react';

import kakaopayQRcode from './src/public/image/kakaopay_QRcode.png';

const Sponsor = () => {
    return (
        <div>
            <p id='sponsorText'>카카오페이로 후원하기</p>
            <img id='sponsor' src={kakaopayQRcode} alt='kakaopay' />
        </div>
    )
}

export default Sponsor;
