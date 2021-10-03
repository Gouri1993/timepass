import React from 'react';
import './first-section.scss';
import worldnewsbg from '../../../assets/images/worldnewsbg.png';
import {Link} from "react-router-dom";

export default function FirstSection() {
    return (
        <div className="news-container flex-r">
            <img src={worldnewsbg} alt="Five developers at work." />
            <section className=' flex-c news-content pl-20 pr-20 pt-35 f-helvetica '>
                <h1 className="font-28 fw-700">WORLD NEWS</h1>
                <div className="divider-white mt-35 mb-35"></div>
                <h2 className="font-24 fw-700">Amazing places in America to visit.</h2>
                <h3 className="font-16 fw-400 mt-20 mb-20">For some reason — this country, this city, this neighborhood, this particular street —  is the place you are living a majority of your life in.</h3>
                <div className="primary-btn font-11 flex-r-jc-ac">
                    <Link className="no-txt-deco font-11 fw-500 white" to="/blogdetails">LEARN MORE</Link>
                </div>
            </section> 
        </div>
    )
}
