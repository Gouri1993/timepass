import React from 'react';
import '../../index.scss';
import '../../assets/scss/styles.scss';
import './header.scss';
import menuicon from '../../assets/icons/menuicon.png';
import profile from '../../assets/profilepics/profile.png';
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div className="flex-r header bg-lg">
            <Link to='/sidenav'><img src={menuicon} alt="menu" width="16" height='14' className="ml-15" /></Link> 
            <div><Link className='no-txt-deco peach f-helvetica fw-700 font-13' to='/home'>LOGO</Link></div>
            <img src={profile} alt="profile pic " width="16 " height='16' className="mr-15 " />
        </div>
    )
}
