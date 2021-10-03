import React from 'react';
import './main.scss';
import FirstSection from './first-section/FirstSection';
import MoreNews from './more-news/MoreNews';
import Tranding from './tranding/Tranding';
import HappeningNow from './happening-now/HappeningNow'


export default function Main() {
    return (
        <div>
            <FirstSection />
            <MoreNews />
            <Tranding />
            <HappeningNow />
        </div>
    )
}
