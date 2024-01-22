import React from 'react';
import './QrCode.css';
import qrcode from '../../images/image-qr-code.png';

const QrCode = () => {
  return (
    <div className='parent-element'>
      <div className='qr-code-outer-div'>
          <div className='qr-code-inner-div'>
              <img src={qrcode}/>
              <div className='qr-code-text-div'>
                <h2>Improve your front-end skills by building projects</h2>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
              </div>
          </div>
      </div>
    </div>
    
  )
}

export default QrCode;