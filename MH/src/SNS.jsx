/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/jsx-key */
import { useState } from 'react';

import x_logo from './img/sns_x.png';
import ins_logo from './img/sns_ins.png';
import facebook_logo from './img/sns_facebook.png';

import './css/SNS.css'

function SNS() {
    const [isOpen, setIsOpen] = useState(false);

    const snsInfo = [
        { logo: x_logo, url: 'https://www.twitter.com/CAPCOM_MHB', username: '@CAPCOM_MHB', alt: 'X' },
        { logo: facebook_logo, url: 'https://www.facebook.com/mhb.capcom', username: '@mhb.capcom', alt: 'Face Book' },
        { logo: ins_logo, url: 'https://www.instagram.com/monsterhuntergame/', username: '@MHinfo_en', alt: 'Instagram' }
    ];

    const snsList = snsInfo.map(snsInfo => {
        return (
            <a href={snsInfo.url} target="_blank">
                <li className="sns__menu_item">
                    <img className="sns__logo"
                        src={snsInfo.logo}
                        alt={snsInfo.alt} />
                    <span className="sns__url">{snsInfo.username}</span>
                </li>
            </a>

        )
    });

    return (
        <div className="sns">
            <h2 className="sns__title">SNS ACCOUNT</h2>
            <div className="sns__accordion">
                <button className="sns__accordion-button" onClick={() => { setIsOpen(!isOpen) }}>
                    Check out the latest information here!
                    <i className={`gg-chevron-down ${isOpen ? 'open' : 'close'}`}></i>
                </button>
                <div className={`sns__content ${isOpen ? 'show' : 'hide'}`}>
                    <ul className="sns__menu">
                        {snsList}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default SNS;