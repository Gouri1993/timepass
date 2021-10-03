import React from 'react';
import './more-news.scss';
import ArrowBack from '../../../assets/icons/Arrow Back.png';
import ArrowForward from '../../../assets/icons/arrow Forward.png';
import time from '../../../assets/icons/time.png';


export default function MoreNews() {

const topics = [
        {
            id:0,
            category:'TRAVEL',
            title:'Article title',
            description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
            publishedtime:'2m ago'
        },
        {
            id:1,
            category:'TECHNOLOGY',
            title:'Article title',
            description:'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat…',
            publishedtime:'1h ago'
        }
      ]
    const moretopics = topics.map((cvalue) => (
        <div key={cvalue.id}>
            <h2 className="peach f-helvetica font-16 fw-700">{cvalue.category}</h2>
            <h3 className="lblack f-helvetica font-16 fw-700 mt-10 mb-10">{cvalue.title}</h3>
            <h4 className="grey f-helvetica font-14 fw-300 lh-15">{cvalue.description}</h4>
            <div className="flex-r mt-10 mb-40">
                <img src={time} width='16' height='16' alt='time'/>
                <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5">{cvalue.publishedtime}</p>
            </div>
        </div>
    ));
    return (
        <div className="more-news bg-w flec-c">
            <div className="title pl-20 pr-20 flex-r">
                <h2 className="lblack f-helvetica font-24 fw-700">MORE NEWS</h2>
                <div className="arrows">
                    <img className="" src={ArrowBack} width="6" height="10" alt='backArrow' />
                    <img className="ml-20" src={ArrowForward} width="6" height="10" alt='forwardArrow' />
                </div>
            </div>
            <div className="divider-grey mb-40 ml-20 mr-20"></div>
            <div className="topics pl-20 pr-20">
            {moretopics}
            </div>
        </div>
    )
}
