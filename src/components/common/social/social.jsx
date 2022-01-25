import React from 'react';
import './social.style.scss';

import {socialData} from '../data';

function Social() {
  return (
    <div className="social">
        <p className="social__title">Check Out My</p>
        {
            socialData.map(({icon, name, id, url}) => (
                <div className="social__icons" key={id}>
                    <a href={url} className="social__url">
                        <img src={icon} alt={name} className="social__icon" />
                    </a>
                </div>
            ))
        }
    </div>
  );
}

export default Social;
