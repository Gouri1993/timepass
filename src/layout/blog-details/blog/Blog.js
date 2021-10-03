import React from 'react';
import './blog.scss';
import blog1 from '../../../assets/images/blog1.png';
import ArrowWhite from '../../../assets/icons/arrow-white.png';
import {Link} from "react-router-dom";

export default function Blog() {
    return (
        <div className="blog bg-lg">
            <div className="blog-overview flex-c">
                <img src={blog1} alt="Five developers at work." />
                <section className='flex-c blog-content pl-20 pr-20 pt-35 f-helvetica'>
                    <h1 className="font-30 fw-700">AMAZING PLACES IN AMERICA TO VISIT</h1>
                    <div className="flex-r next mt-145">
                        <Link to="" className="peach font-16 fw-700">NEXT
                        <img className="ml-10" src={ArrowWhite} width="6" height="10" alt='whiteArrow'/></Link>
                    </div>
                </section>
            </div>
            <div className="blog-description flex-c f-helvetica ml-20 mr-20">
                <h2 className="font-28 fw-700 pt-30">Quisque viverra interdum velit?</h2>
                <p className="font-14 fw-400 grey pb-20 pt-20 lh-15">Culpa qui officia deserunt mollit anim id esto polujimi laborum. Sed ut perspiciatis unde omnis iste eropluk onatuspop error sit voluptartem accusantium wetrop doloremque laudantium, totam rem aperiam, eaquep ipsa quaeer ab illo inventore veritatisy
                    et quasi weth ropeior architecto beatae vitae dicta sunt explicapbo. Nemo popul eniem ipsam yui voluptatem quialoperyi voluptas sit aspernatur aute odit aut fugit, sed quiawi consequuntur joki erty magni dolores eosep quiklopii ratione wertyuil
                    voluptatem sequi nesciunt. Nequeop porro polu quisquam est, quepi dolorem ipsum quiat lopi dolor srit amet, consectetur adipisci velit, topitop seid quia non numquam eiuris modij tempora poluko incidunt ut labore et dolore magnam aliquam mokeru
                    quaerat iope voluptatem.</p>
                <p className="font-14 fw-400 grey lh-15">Lorem ipsum dolor sit amet, consectetur holukoro on adipisifwcing elit, sed do eiusmod tempor incididunte utopi labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation eropileri ullamco laboris nisi ut aliquip
                    ex ea commodo wopun consequat. Duis aute irure dolor in reprehenderit inie tufpoy voluptate velit esse cillum dolore eu fugiat holi nulla parieratur. Excepteur sint occaecat ropukuli uki cupidatat.</p>
            </div>
            <div className="divider-grey ml-20 mr-20 mt-30"></div>
        </div>
    )
}
