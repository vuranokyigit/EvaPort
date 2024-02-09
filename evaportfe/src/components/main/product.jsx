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
                           <h1 style={{fontWeight:"bold"}}>{t('productMainTitle')}</h1>
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
                                  <a href="/eva/evacore">{t('productCardsBackText')}</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="card">
                          <div className="cover item-b">

                              <div className="card-back">
                                  <a href="/eva/evabrand">{t('productCardsBackText')}</a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                      <div className="card">
                          <div className="cover item-c">

                              <div className="card-back">
                                  <a href="/eva/ecoevapro">{t('productCardsBackText')}</a>
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

