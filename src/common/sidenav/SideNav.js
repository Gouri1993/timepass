import React from 'react';
import '../../index.scss';
import '../../assets/scss/styles.scss';
import './sidenav.scss';
import photos from '../../assets/icons/photos.png';
import home from '../../assets/icons/home.png';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';

export default function SideNav() {
    return (
        <div className="navigation">
            <div className="flex-c pl-40 pt-40 nav-ls">
                <div className="flex-r "><Link className='no-txt-deco peach f-helvetica fw-700 font-13' to='/home'>LOGO</Link></div>
                <div className="flex-r mt-100 f-helvetica fw-700 font-11 home ">
                    <img src={home} alt='home' />
                    <a className="ml-20 no-txt-deco">HOME</a>
                </div>
                <div className=" flex-r mt-20 f-helvetica fw-700 font-11 photos ">
                    <img src={photos} alt='photos' />
                    <a className="ml-20 no-txt-deco">PHOTOS</a>
                </div>
            </div>
            <Footer />
        </div>
    )
}

