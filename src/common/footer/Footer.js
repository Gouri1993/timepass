import React from 'react';
import './footer.scss';
import instagram from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import web from '../../assets/icons/web.png';

export default function Footer() {
    return (
        <div className="footer flex-c-ac">
            <div className="pb-10">
                <a href="instagram.com" target="_blank">
                    <img src={instagram} width="16" height="16" alt="instagram" />
                </a>
                <a href="twitter.com" target="_blank" className="ml-20">
                    <img src={twitter} width="16" height="16" alt="twitter" />
                </a>
                <a href="facebook.com" target="_blank" className="ml-20">
                    <img src={facebook} width="16" height="16" alt="facebook" />
                </a>
                <a href="gamil.com " target="_blank" className="ml-20">
                    <img src={web} width="16" height="16" alt="web" />
                </a>
            </div>
            <div className="f-helvetica fw-400 font-10">@copyright 2021</div>
        </div>
    )
}
