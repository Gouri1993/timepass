import React from 'react';
import './happening-now.scss';
import ArrowBack from '../../../assets/icons/Arrow Back.png';
import ArrowForward from '../../../assets/icons/arrow Forward.png';
import time from '../../../assets/icons/time.png';

export default function HappeningNow() {

    const cards = [
        {
            id:0,
            img:'/assets/images/happening1.png',
            category:'CITY',
            title:'Large article title mobile layout',
            description:'Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert',
            publishedtime:'2m ago'
            },
        {
            id:1,
            img:'/assets/images/happening2.png',
            category:'TRAVEL',
            title:'Large article title mobile layout',
            description:'Lorem ipsum dolor sit amet, in eam odio amet, vix id nullam detracto, vidit vituperatoribus duo id. Affert',
            publishedtime:'2m ago'
        }
    ]

    const additionslcard = [
        {
            id:0,
            img:'/assets/images/additional1.png',
            title:'Elephants',
            publishedtime:'2m ago'
        },
        {
            id:1,
            img:'/assets/images/additional2.png',
            title:'Parrots',
            publishedtime:'1h ago'
        },
        {
            id:2,
            img:'/assets/images/additional3.png',
            title:'hilly Road',
            publishedtime:'3h ago'
        }
    ]

    const happingposts = cards.map((currentcards) => (
            <div className="card mb-40" key={currentcards.id}>
                <img className='card-img' src={currentcards.photo} alt="tranding" />
                <section className=' flex-c card-content pl-20 pr-20 pt-35 f-helvetica '>
                    <h1 className="font-24 fw-700">{currentcards.title}</h1>
                    <h3 className="font-16 fw-400 mt-20 mb-20">{currentcards.desc}</h3>
                    <div className="flex-r mt-10 pb-40">
                        <img src={time} width='16' height='16' />
                        {/* <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5">{currentcards.createdAt}</p> */}
                        <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5"></p>
                    </div>
                </section>
            </div>
    ));

    const newAdditionalcard = additionslcard.map((addcardvalue) => (
        <div key={addcardvalue.id} className="card mb-40">
            <img src={addcardvalue.img} height='180' alt="img" />
            <h2 className="lblack f-helvetica font-14 fw-700 mb-10 mt-15">{addcardvalue.title}</h2>
            <div className="flex-r mt-10">
                <img src={time} width='16' height='16' alt='time' />
                <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5">{addcardvalue.publishedtime}</p>
            </div>
        </div>
    ));

    return (
        <div className="happening bg-lg">
            <div className="title pl-20 pr-20 flex-r">
                <h2 className="lblack f-helvetica font-24 fw-700">HAPPENING NOW</h2>
                <div className="arrows">
                    <img className="" src={ArrowBack} width="6" height="10" alt='backArrow'/>
                    <img className="ml-20" src={ArrowForward} width="6" height="10" alt='forwardArrow'/>
                </div>
            </div>
            <div className="cards pl-20 pr-20">
            {happingposts}
            </div>
            <div className="divider-grey ml-20 mr-20"></div>
            <div className="additionalcards mt-40 pl-20 pr-20">
            {newAdditionalcard}
            </div>
        </div>  
    )
}









