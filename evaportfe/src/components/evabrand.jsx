import React  from "react";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileInvoice} from "@fortawesome/free-solid-svg-icons";

const Evabrand = () => {
    const {t}=useTranslation();

    return(
      <>
          <section style={{ backgroundImage: 'url("/assets/EvaBrandLogo.png")' }} className="home-section section-hero image-bg overlay-2 slanted" id="home-section">
              <div className="container">
                  <div className="row align-items-center justify-content-center">
                      <div className="col-md-8 text-center">
                          <h1>EvaBrand</h1>
                          <div className="mx-auto w-75">
                              <p></p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          <section className="site-section portfolio-single" id="next-section">
              <div className="container">
                  <div className="row mb-5">
                      <div className="col-md-6">
                          <p />
                      </div>
                  </div>
                  <div className="row mb-5 mt-5">
                      <div className="col-lg-6">
                          <figure>
                              <a href="/assets/EvaBrandLogo.png" data-fancybox="gallery">
                                  <img src="/assets/mixurun2.jpg" alt="" className="img-fluid" />
                              </a>
                          </figure>
                      </div>
                      <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
                          <div className="mb-5">
                              <h3 className="mb-4 h4">EVABRAND</h3>
                              <p className="mb-0">
                                  {t('productEvaBrandParagraph')}
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          <section className="documentSection">
              <h1>{t('productDocumentTitle')}</h1>
          <div className="row pb-4 border-top pt-5 block__19738 section-counter">
              <div className="col-6 col-md-6 col-lg-6 mb-7 mb-lg-0">
                  <a href="/TDS-EVAPORT-ENG 1.20.pdf" style={{color:"black"}}><span className="homeIcon"><FontAwesomeIcon icon={faFileInvoice} size="2xl" /></span></a>
                  <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                      <span className="icon-line-mobile mr-3" />
                  </div>
                  <span className="caption">{t('productDocuments')} 1.20 </span>
              </div>
              <div className="col-6 col-md-6  col-lg-6 mb-7 mb-lg-0">
                  <a href="/TDS-EVAPORT-ENG 1.30.pdf" style={{color:"black"}}><span className="homeIcon"><FontAwesomeIcon icon={faFileInvoice} size="2xl" /></span></a>
                  <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                      <span className="icon-line-mobile mr-3" />
                  </div>
                  <span className="caption">{t('productDocuments')} 1.30 </span>
              </div>
          </div>
          </section>
      </>
  )
}
export default Evabrand