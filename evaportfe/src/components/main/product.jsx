import React from "react";
import '../styles/products.css'
import {useTranslation} from "react-i18next";
const Product = () => {
    const {t}=useTranslation();
    return(
      <div>
          <section
              style={{ backgroundImage: 'url("/assets/3-min.png")' }}
              className="home-section section-hero overlay slanted position-relative"
              id="home-section">
              <div className="container">
                  <div className="row align-items-center justify-content-center">
                      <div className="col-md-8 text-center" id="evaPortWelcome">
                           <h1 className="animated-heading" style={{fontWeight:"bold"}}>{t('productMainTitle')}</h1>
                          <h3 style={{color:"white", }}>{t('productTextUnderTitle')}</h3>
                      </div>
                  </div>
              </div>
          </section>
          <section>
              <div className="row" id="cardSection">
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="card">
                          <div className="cover item-a">
                              <div className="card-back">
                                  <a href="/evaport/evacore">{t('productCardsBackText')}</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="card">
                          <div className="cover item-b">

                              <div className="card-back">
                                  <a href="/evaport/evabrand">{t('productCardsBackText')}</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="card">
                          <div className="cover item-c">

                              <div className="card-back">
                                  <a href="/evaport/EvaRenew">{t('productCardsBackText')}</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section  className= "site-section about-us-section mt-10">
              <div className="productCard">
                  <div className="container">
                      <div className="row align-items-center justify-content-center">
                          <div className="card bg-green" id="card-box">
                              <div className="col-md-4 text-dark" id="card-text">
                                  <div className="card-title" id="cardTitle" >
                                      <div className="row">
                                          <div className="col-6"><img src="/assets/soles.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                          <div className="col-6" id="nearLogoExp">Soles</div>
                                      </div>
                                  </div>
                                  <div className="card-body" id="cardBodyHome">
                                      Lightweight, flexible, abrasion, resistant, soft touch
                                  </div>
                              </div>
                              <div className="divider-horizontal">'</div>
                              <div className="col-md-4 text-dark" id="card-text" >
                                  <div className="card-title" id="cardTitle">
                                      <div className="row">
                                          <div className="col-6"><img src="/assets/slippers.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                          <div className="col-6" id="nearLogoExp">Slippers</div>
                                      </div>
                                  </div>
                                  <div className="card-body" id="cardBodyHome">
                                      Lightweight, good grip, wide range of colors
                                  </div>
                              </div>
                              <div className="divider-horizontal">'</div>
                              <div className="col-md-4 text-dark" id="card-text" >
                                  <div className="card-title"  id="cardTitle" >
                                      <div className="row">
                                          <div className="col-6"><img src="/assets/boots.png" style={{fontSize:"xx-small", width:"100%"}} alt=" "/></div>
                                          <div className="col-6" id="nearLogoExp">Boots</div>
                                      </div>
                                  </div>
                                  <div className="card-body" id="cardBodyHome">
                                      Lightweight, resistant, perfect aspect
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  )
}
export default Product;

