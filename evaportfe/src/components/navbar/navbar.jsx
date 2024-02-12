import React, {useState, useEffect} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import i18n from "../i18n";
import {useTranslation} from "react-i18next";


const MyNavbar = () => {
    const [opacity, setOpacity]=useState(1);
    const [isNavToggled, setIsNavToggled] = useState(false);
    const toggleNav = () => {
        setIsNavToggled(!isNavToggled);
    };
    useEffect(() => {
        const handleScroll = () => {
            const opacityValue = Math.max(1 - window.scrollY / 300, 0);
            setOpacity(opacityValue);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    const {t}=useTranslation();
    return (
        <>

            <Navbar collapseOnSelect
                    expand="lg"
                    variant="light"
                    id="navbarCollapse"
                    style={{ backgroundColor: "transparent", opacity }}
                    className="fixed-top navbar-scroll ">
                <div className="navbar-brand d-lg-none" style={{flex:"1"}} >
                    <a href="https://unique-florentine-94c5b3.netlify.app/"><img className="logoImage" src="/assets/EVAboldlight.png" alt="" style={{ maxWidth: '700px' }}/></a>
                </div>
                <Navbar.Toggle className="col-md-3" id="navbarToggle" aria-controls="responsive-navbar-nav" onClick={toggleNav} style={{marginRight:"90px"}} />

                <Navbar.Collapse className={`col-md-12 ${isNavToggled ? 'nav-to-left' : ''}`} id="responsive-navbar-nav">
                    <div className="col-md-4 nav-animate" id="mainLogoClass">
                        <a  href="https://evaport.pt/"><img className="logoImage" src="/assets/EVAboldlight.png" alt=" "/></a>
                    </div>
                    <div className="col-md-4" id="navbarContentTextRoute">
                    <Nav className="ml-auto" id="navbarBar">
                        <div id="firstChild"><Nav.Link  style={{color:"#ffffff"}} href="/">{t('navbarHome')}</Nav.Link></div>
                        <div id="secondChild"><Nav.Link  style={{color:"#ffffff"}} href="/evaport/about">{t('navbarAboutUs')}</Nav.Link></div>
                        <div id="thirdChild"><Nav.Link  style={{color:"#ffffff"}} href="/evaport/product">{t('navbarProduct')}</Nav.Link></div>
                        <div  id="fourthChild"><Nav.Link style={{color:"#ffffff"}} href="/evaport/contact">{t('navbarContact')}</Nav.Link></div>
                    </Nav>
                    </div>
                    <div className="col-md-4" id="language">
                        <button style={{border: "none"}} onClick={() => changeLanguage('en')}><img style={{width: "30px"}} src="/assets/united-kingdom.png" alt=""/></button>
                        <button style={{border: "none"}} onClick={() => changeLanguage('it')}><img style={{width: "30px"}} src="/assets/italy.png" alt=""/></button>
                        <button style={{border: "none"}} onClick={() => changeLanguage('pt')}><img style={{width: "30px"}} src="/assets/portugal.png" alt=""/></button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </>

    );
};

export default MyNavbar;
