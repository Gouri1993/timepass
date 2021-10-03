import React from 'react';
import './reviews.scss';
import time from '../../../assets/icons/time.png';

export default function Reviews() {


    const videos=[
        {
          id:'0',
          profileimg:'/assets/profilepics/JonathanWalker.png',
          profilename:'Jonathan Walker',
          comment:'In hac habitasse platea dictumst. Sed nec venenatis odio. Nulla faucibus ipsum sed faucibus accumsan…',
          publishedtime:'2m'
        },
        {
          id:'0',
          profileimg:'/assets/profilepics/BrendaMercer.png',
          profilename:'Brenda Mercer',
          comment:'Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus luctus massa vitae lobortis. Duis consequat, nunc a pretim…',
          publishedtime:'3h',
          vedio:'/assets/uploadedvideo/video1.png',
          // img:''
        }
    ]
    
    const newvideos = videos.map((currentvideos) => (
        <div key={currentvideos.id}>
            <div className="user-detail flex-r mb-20 ml-20">
                <img src={currentvideos.profileimg} width='40' height='40' alt='profileimg' />
                <h4 className="lblack f-helvetica font-24 fw-700 ml-10">{currentvideos.profilename}</h4>
            </div>
            <p className="lblack f-helvetica font-16 fw-400 f-oblique lh-15 ml-20 mr-20">{currentvideos.comment}</p>
            <div className="flex-r mt-10 ml-20">
                <img src={time} width='16' height='16' alt='time' />
                <p className="grey f-helvetica font-13 fw-400 f-oblique ml-5 ">{currentvideos.publishedtime}</p>
            </div>
            <img src={currentvideos.vedio} className="mt-20 ml-20 pb-20" />
        </div>
    ));
        

    return (
        <div className="reviews bg-lg pt-30">
            {newvideos}
        </div>
    )
}
