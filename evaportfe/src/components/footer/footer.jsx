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
                            <h3>{t('footerProductsTitle')}</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/eva/evacore">Evacore</a>
                                </li>
                                <li>
                                    <a href="/eva/evabrand">Evabrand</a>
                                </li>
                                <li>
                                    <a href="/eva/ecoevapro">Ecoevapro</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-4 mb-4 mb-md-0">
                            <h3>{t('footerCompanyTitle')}</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/eva/about">{t('footerCompanyLink1')}</a>
                                </li>
                                <li>
                                    <a href="/eva/product">{t('footerCompanyLink2')}</a>
                                </li>
                                <li>
                                    <a href="/eva/contact">{t('footerCompanyLink3')}</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-4 mb-4 mb-md-0" id="footerContactSection">
                            <h3>{t('footerContactTitle')}</h3>
                            <div className="footer-social" id="footersocial">
                                <a href="https://www.instagram.com/evacaregranul/" id="insta">
                                   <span><FontAwesomeIcon icon={faInstagram} size="xl"/></span>
                                </a>
                                <a href="https://www.linkedin.com/in/selen-%C3%B6ztemel-0101/" id="linked">
                                   <span> <FontAwesomeIcon icon={faLinkedin} size="xl" /></span>
                                </a>
                            </div>
                            <div className="footerContact">
                                <h3>
                                    +351 223 204 030/PT
                                </h3>
                                <h3>
                                    +90 212 243 64 55/TR
                                </h3>
                                <a href="/eva/contact"><button className="btn btn-outline-white btn-sm " style={{color: "white"}}>{t('footerContactButton')}</button></a>
                            </div>

                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="container">
                        <div className="col-12">
                            <a href="https://unique-florentine-94c5b3.netlify.app"><img style={{width:"50%"}}  src="/assets/EVAboldlight.png" alt=" "/></a>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="copyRight">
                    <p className="copyright" style={{ color: "whitesmoke", fontSize: "1rem"}}> &copy; {new Date().getFullYear()} {t('footerCopyRightText')} EVACARE  </p>
                </div>
            </footer>

        </>
    )
}
export default Footer;