import React from "react";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFileInvoice} from "@fortawesome/free-solid-svg-icons";

const EvaRenew = () => {
    const {t}=useTranslation();

    return(
      <>
          <section
              className="home-section section-hero image-bg overlay-2 slanted"
              style={{ backgroundImage: 'url("/assets/EvaRenewLogo.png")' }}
              id="home-section"
          >
              <div className="container">
                  <div className="row align-items-center justify-content-center">
                      <div className="col-md-8 text-center">
                          <h1 style={{textTransform:"capitalize"}}>EvaRenew</h1>
                          <div className="mx-auto w-75">
                              <p />
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
                              <a href="assets/3.png" data-fancybox="gallery">
                                  <img src="/assets/certificate.jpg" alt="" className="img-fluid" />
                              </a>
                              <a href="https://www.bloommaterials.com/"><span><img id="bloomLogo" src="/assets/Bloom-Logo.png" alt=" " loading="lazy"/></span></a>

                          </figure>
                      </div>
                      <div className="col-lg-5 ml-auto h-100 jm-sticky-top">
                          <div className="mb-5" id="paragraphEco">
                              <h3 className="mb-4 h4">EvaRenew</h3>
                              <p className="mb-0">
                                  {t('productEvaRenewParagraph')}
                              </p>
                          </div>
                      </div>
                  </div>

              </div>
          </section>
          <section className="documentSection">
              <h1>{t('productEvaRenewCertificateTitle')}</h1>
              <div className="row pb-4 border-top pt-5 block__19738 section-counter">
                  <div className="col-12 col-md-12 col-lg-12 mb-7 mb-lg-0">
                      <a href="/scope.pdf" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><span className="homeIcon"><FontAwesomeIcon icon={faFileInvoice} size="2xl" /></span></a>
                      <div className="d-flex align-items-center justify-content-center mb-2" id="infoNumber">
                          <span className="icon-line-mobile mr-3" />
                      </div>
                      <span className="caption">{t('productEvaRenewCertificateDoc')}  </span>
                  </div>
                  <hr style={{
                      width:"50%", margin:"0 auto", marginTop:"5%"
                  }}/>
              </div>
              <h3 className="mb-4 h4">{t('productNotesTitle')}</h3>
              <span className="text-danger"> *</span><p className="mb-0" style={{
                  width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
              }}>
                  {t('productNotesParagraph')}
              </p>
              <h3 className="mb-4 mt-4 h4">{t('productPackagingTitle')}</h3>
              <span className="text-danger"> *</span><p className="mb-0" style={{
              width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
          }}>
              {t('productPackagingParagraph')}
          </p>
              <h3 className="mb-4 mt-4 h4">{t('productProcessingTitle')}</h3>
              <span className="text-danger"> *</span><p className="mb-0" style={{
              width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
          }}>
              {t('productProcessingParagraph')}
          </p>
              <h3 className="mb-4 mt-4 h4">{t('productStorageTitle')}</h3>
              <span className="text-danger"> *</span><p className="mb-0" style={{
              width:"80%", margin:"0 auto",marginBottom:"3%",fontSize:"small"
          }}>
              {t('productStorageParagraph')}
          </p>
          </section>
      </>
  )
}
export default EvaRenew