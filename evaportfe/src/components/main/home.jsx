import React from "react";
import {useSpring, animated} from "react-spring";
import * as PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndustry, faCubes,faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";
//animated number method.///////////////
const Count = ({n}) => {
    const { counter } = useSpring({
        from: { counter: 0 },
        to: { counter: n },
        config: { duration: 2000 },
    });
    return <animated.span>{counter.interpolate((val) => Math.ceil(val))}</animated.span>;
};


FontAwesomeIcon.propTypes = {icon: PropTypes.any};
const Home = () => {

    const {t}=useTranslation();
    return(
       <>
           <div>
               {/* HOME */}
               <section
                   style={{ backgroundImage: 'url("/assets/bluesilica-min.png")' }}
                   className="home-section section-hero overlay slanted position-relative"
                   id="home-section">
                   <div className="container">
                       <div className="row align-items-center justify-content-center">
                           <div className="col-md-8 text-center" id="evaPortWelcome">
                               <h1 className="animated-heading" style={{fontWeight:"bolder"}}>{t('homeWelcome')}</h1>
                               <h1 className="animated-heading" style={{fontWeight:"bolder"}}>{t('homeWelcome2')}</h1>
                               <a href="/evaport/contact" className="btn btn-md"  id="homeSectionBtnContact" style={{fontWeight: "300"}}>
                                     {t('homeButtonGetInTouch')}
                                  </a>
                           </div>
                       </div>
                   </div>
               </section>
           </div>
           <div className="row pb-0 border-top pt-5 block__19738 section-counter" id="counterMainDiv">
               <div className="container" id="counterCont">
               <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
                   <span className="homeIcon"><FontAwesomeIcon icon={faCubes} size="2xl" /></span>
                   <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                       <span className="icon-line-mobile mr-3" />
                       <span className="number" data-number={480}>
                                       <Count n={480}/>
                                   </span>
                   </div>
                   <span className="caption">{t('homeCounterProduction')} </span>
               </div>
               <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
                   <span className="homeIcon"><FontAwesomeIcon icon={faUserGroup} size="2xl" /></span>
                   <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                       <span className="icon-line-lightbulb mr-3" />
                       <span className="number" data-number={11}>
                                       <Count n={11}/>
                                   </span>
                   </div>
                   <span className="caption">{t('homeCounterWorkers')}</span>
               </div>
               <div className="col-4 col-md-4 col-lg-4 mb-7 mb-lg-0" id="counterPart">
                   <span className="homeIcon"><FontAwesomeIcon icon={faIndustry} size="2xl" /></span>
                   <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                                   <span className="number" data-number={2000}>
                                       <Count n={2000}/>
                                   </span>
                   </div>
                   <span className="caption">m<sup>2</sup> {t('homeCounterFactoryArea')}</span>
               </div>
               </div>
           </div>
           <section className="site-section about-us-section" id="about-us-section">
                   <div className="container">
                       <div className="row mb-5 pt-0 site-section">
                           <div className="col-md-6 align-self-center">
                               <h2  className="section-title-sub " id="homeAbout">{t('homeAboutUsSecondTitle')}</h2>
                               <p>
                                   {t('homeAboutUsParagraph')}
                               </p>
                               <p className="mt-4">
                                   <a style={{textTransform:"capitalize"}} href="/evaport/about" className="spepcial_link">
                                       {t('homeAboutUsLink')}
                                   </a>
                               </p>
                           </div>
                           <div className="col-md-5 ml-auto img-overlap">
                               <div className="img-1">
                                   <img
                                       src="/assets/3-min.png"
                                       alt=""
                                       loading="lazy"
                                       className="img-fluid img-shadow"
                                   />
                               </div>
                               <div className="img-2">
                                   <img
                                       src="/assets/6-min.png"
                                       alt=""
                                       loading="lazy"
                                       className="img-fluid img-shadow"
                                   />
                               </div>
                           </div>
                       </div>

                   </div>
               </section>
           <section  className= "site-section about-us-section mt-9 mb-4" id="about-us-section" style={{marginTop:"-15%"}}>
               <div className="productCard">
                   <div className="container">
                       <div className="row align-items-center justify-content-center">
                           <div className="card bg-green" id="card-box">
                               <div className="col-md-4 text-dark" id="card-text">
                                   <div className="card-title" id="cardTitle" >
                                       <div className="row">
                                           <div className="col-6"><img src="/assets/soles.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                           <div className="col-6" id="nearLogoExp">{t('homeTableTitleSoles')}</div>
                                       </div>
                                   </div>
                                   <div className="card-body" id="cardBodyHome">
                                       {t('homeTableBodySoles')}
                                   </div>
                               </div>
                               <div className="divider-horizontal">'</div>
                               <div className="col-md-4 text-dark" id="card-text" >
                                   <div className="card-title" id="cardTitle">
                                       <div className="row">
                                           <div className="col-6"><img src="/assets/slippers.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                           <div className="col-6" id="nearLogoExp">{t('homeTableTitleSlippers')}</div>
                                       </div>
                                   </div>
                                   <div className="card-body" id="cardBodyHome">
                                       {t('homeTableBodySlippers')}
                                   </div>
                               </div>
                               <div className="divider-horizontal">'</div>
                               <div className="col-md-4 text-dark" id="card-text" >
                                   <div className="card-title"  id="cardTitle" >
                                       <div className="row">
                                           <div className="col-6"><img src="/assets/boots.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                           <div className="col-6" id="nearLogoExp">{t('homeTableTitleBoots')}</div>
                                       </div>
                                   </div>
                                   <div className="card-body" id="cardBodyHome">
                                       {t('homeTableBodyBoots')}
                                   </div>
                                   <p className="mt-lg-5">
                                       <a style={{textTransform:"capitalize"}} href="/evaport/product" className="spepcial_link">
                                           {t('homeAboutUsLink')}
                                       </a>
                                   </p>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
           <section className="site-section about-us-section" id="about-us-section" style={{marginTop:"-5%"}}>
               <div className="container">
                   <div className="row mb-5 pt-0 site-section">
                       <div className="col-md-5 ml-auto ">
                           <div className="img-1">
                               <img
                                   src="/assets/mapVector4.png"
                                   alt=""
                                   loading="lazy"
                                   className="img-fluid img-shadow"
                               />
                           </div>
                       </div>
                       <div className="col-md-6 align-self-center">
                           <h2 style={{textTransform:"uppercase"}} className="section-title-sub " id="homeAbout">{t('homeMapTitle')}</h2>
                           <p>
                               {t('homeMapParagraph')}
                           </p>
                           <p className="mt-4">
                               <a style={{textTransform:"capitalize"}} href="/evaport/product" className="spepcial_link">
                                   {t('homeAboutUsLink')}
                               </a>
                           </p>
                       </div>
                   </div>
               </div>
           </section>
           <section className="site-section about-us-section mb-5" id="about-us-section" style={{marginTop:"-15%"}}>
               <div className="container">
                   <div className="row mb-5 pt-0 site-section">
                       <div className="col-md-6 align-self-center">
                           <h2 style={{textTransform:"uppercase"}} className="section-title-sub " id="homeAbout">
                               {t('homeSolarTitle')}
                           </h2>
                           <p>
                               {t('homeSolarParagraph')}
                           </p>
                           <p className="mt-4">
                               <a style={{textTransform:"capitalize"}} href="/evaport/about" className="spepcial_link">
                                   {t('homeAboutUsLink')}
                               </a>
                           </p>
                       </div>
                       <div className="col-md-5 ml-auto ">
                           <div className="img-1">
                               <img
                                   src="/assets/evacati.jpeg"
                                   alt=""
                                   loading="lazy"
                                   className="img-fluid img-shadow"
                               />
                           </div>
                       </div>
                   </div>
               </div>
           </section>
       </>
    )
}
export default Home;