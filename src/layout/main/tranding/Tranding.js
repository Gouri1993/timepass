import React from 'react';
import './tranding.scss';
import ArrowBack from '../../../assets/icons/Arrow Back.png';
import ArrowForward from '../../../assets/icons/arrow Forward.png';
import time from '../../../assets/icons/time.png';  

export default function Tranding() {

    const cards = [
        {
            id:0,
            img:'assets/images/trend-img1.png',
            title:'Dolore magna aliqua',
            description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
            publishedtime:'2m ago'
        },
        {
            id:1,
            img:'/assets/images/trend-img2.png',
            title:'Dolv bhi tresta',
            description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
            publishedtime:'1h ago'
        }
    ]

    const newcards = cards.map((cardvalues) => (
        <div key={cardvalues.id}>
            <div className="card bg-w mb-40">
                <img src={cardvalues.img} height='155' alt='images' />
                <h2 className="lblack f-helvetica font-16 fw-700 mb-10 ml-20 mt-25">{cardvalues.title}</h2>
                <h3 className="grey f-helvetica font-13 fw-300 lh-15 ml-20 mr-20">{cardvalues.description}</h3>
                <div className="flex-r mt-10 ml-20 pb-40">
                    <img src={time} width='16' height='16' alt='time' />
                    <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5">{cardvalues.publishedtime}</p>
                </div>
            </div>
        </div>
    ));


    return (
        <div className="trending bg-lg">
            <div className="title flex-r pl-20 pr-20">
                <h2 className="lblack f-helvetica font-24 fw-700">TRENDING</h2>
                <div className="arrows">
                    <img className="" src={ArrowBack} width="6" height="10" alt='backArrow' />
                    <img className="ml-20" src={ArrowForward} width="6" height="10" alt='forwardArrow' />
                </div>
            </div>
            <div className="cards pl-20 pr-20">
            {newcards}
            </div>
        </div>
    )
}
