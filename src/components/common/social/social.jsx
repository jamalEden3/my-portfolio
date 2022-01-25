import React from 'react';
import './social.style.scss';

import {socialData} from '../data';

function Social() {
  return (
    <div className="social">
        <p className="social__title">Check Out My</p>
        {
            socialData.map(({icon, name, id}) => (
                <div className="social__icons" key={id}>
                    <img src={icon} alt={name} className="social__icon" />
                </div>
            ))
        }
    </div>
  );
}

export default Social;
