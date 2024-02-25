import React from "react";

import '../styles/component.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {useTranslation} from "react-i18next";
const Footer = () => {
    const {t}=useTranslation();

    return(
        <>
            <footer className="site-footer slanted-footer">
                <a href="#top" className="smoothscroll scroll-top">
                    <span><FontAwesomeIcon icon={faArrowUp} /></span>
                </a>
                <div className="container">
                    <div className="row mb-3" id="footerInfoSection">
                        <div className="col-6 col-md-4 mb-4 mb-md-0">
                            <h3 style={{textTransform:"uppercase"}}>{t('footerProductsTitle')}</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/evaport/evacore">EvaCore</a>
                                </li>
                                <li>
                                    <a href="/evaport/evabrand">EvaBrand</a>
                                </li>
                                <li>
                                    <a href="/evaport/EvaRenew">EvaRenew</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 mb-4 mb-md-0">
                            <h3 style={{textTransform:"uppercase"}} >{t('footerCompanyTitle')}</h3>
                            <ul  className="list-unstyled">
                                <li>
                                    <a href="/evaport/about">{t('footerCompanyLink1')}</a>
                                </li>
                                <li>
                                    <a href="/evaport/product">{t('footerCompanyLink2')}</a>
                                </li>
                                <li>
                                    <a href="/evaport/contact">{t('footerCompanyLink3')}</a>
                                </li>
                            </ul>
                        </div>

                        <div style={{textTransform:"capitalize"}} className="col-6 col-md-4 mb-4 mb-md-0" id="footerContactSection">
                            <h3>{t('footerContactTitle')}</h3>
                            <div className="footer-social" id="footersocial">
                                <a href="https://www.instagram.com/evaportlda/" id="insta" target="_blank" rel="noopener noreferrer">
                                   <span><FontAwesomeIcon icon={faInstagram} size="xl"/></span>
                                </a>
                                <a href="https://www.linkedin.com/company/evaport/" id="linked" target="_blank" rel="noopener noreferrer">
                                   <span> <FontAwesomeIcon icon={faLinkedin} size="xl" /></span>
                                </a>
                            </div>
                            <div className="footerContact">
                                <h3>
                                    +351 223 204 030/PT
                                </h3>
                               <h6>Rua Gonçalves Zarco, 2173B 4455-821, Santa Cruz do Bispo, PORTUGAL</h6>

                                <a  href="/evaport/contact"><button className="btn btn-outline-white btn-sm " style={{color: "white", textTransform:"capitalize"}}>{t('footerContactButton')}</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="container">
                        <div className="col-12">
                            <a href="https://evaport.pt/"><img style={{width:"50%"}}  src="/assets/Evalightlight.png" alt=" "/></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p className="copyright" style={{ color: "whitesmoke", fontSize: "1rem"}}> &copy; {new Date().getFullYear()} {t('footerCopyRightText')} EVAPORT  </p>
                </div>
            </footer>

        </>
    )
}
export default Footer;