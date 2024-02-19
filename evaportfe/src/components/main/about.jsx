import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const About = () => {
    const [openModalVideo, setOpenVideo] = useState(false); //set true cause of would like to when about layer opened video is opened

    const openVideo = () => {
        setOpenVideo(!openModalVideo);
        console.log("modal Opened");
    }

    const closeModal = () => {
        setOpenVideo(false);
        console.log("clicked close modal");
    };

    useEffect(() => {
        const handleOverlayClick = (e) => {
            // Check if the click target is the overlay (background) outside the modal content // play video after click video screen
            if (e.target.classList.contains("modal")) {
                closeModal();
            }
        };
        if (openModalVideo) {
            document.addEventListener("click", handleOverlayClick);
        }

        // Remove the event listener when the modal is closed // close modal after click anywhere without videoscreen

        return () => {
            document.removeEventListener("click", handleOverlayClick);
        };
    }, [openModalVideo]);

    const { t } = useTranslation();

    return (
        <>
            <section
                style={{ backgroundImage: 'url("/assets/9-min.png")' }}
                className="home-section section-hero overlay slanted position-relative"
                id="home-section">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-8 text-center" id="evaPortWelcome">
                            <h1 className="animated-heading" style={{fontWeight:"bold"}}>{t('aboutUsMainTitle')}</h1>
                            <h3>{t("aboutUsSecondMainTitle")}</h3>
                            <div className="mx-auto w-75">
                                <button id="aboutButtonVideo" onClick={openVideo}> <span>{t('aboutButtonVideo')}</span></button>
                                <div className={`modal ${openModalVideo ? 'open' : ''}`}>
                                    <div className="modal-content" id="modalContent">
                                        <video

                                            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                                            playsInline
                                            loop
                                            muted
                                            controls
                                            alt=""
                                            src="/assets/EVACARE.mp4"

                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section" id="next-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="/assets/1-min.png" alt="" className="img-fluid img-shadow" />
                        </div>
                        <div className="col-lg-5 ml-auto">
                            <h2 className="section-title mb-3">
                                {t('aboutUsFirstTitle')}
                            </h2>
                            <p>
                                {t('aboutUsFirstParagraph1')}
                            </p>
                            <p>
                                {t('aboutUsFirstParagraph2')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="site-section about-us-section" id="twinImageAbout">
                <div className="container">
                    <div className="row mb-5 pt-0 site-section">
                        <div className="col-md-6 align-self-center">
                            <h2 className="section-title">
                                {t('aboutUsSecondTitle')}
                            </h2>
                            <p>
                                {t('aboutUsSecondParagraph')}
                            </p>
                        </div>
                        <div className="col-md-5 ml-auto img-overlap">
                            <div className="img-1">
                                <img
                                    src="/assets/8-min.png"
                                    alt=""
                                    className="img-fluid img-shadow"
                                    loading="lazy"
                                />
                            </div>
                            <div className="img-2">
                                <img
                                    src="/assets/9-min.png"
                                    alt=""
                                    className="img-fluid img-shadow"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="carouselSection">
                <Carousel  autoPlay interval={2000} infiniteLoop>
                    <div>
                        <img src="/assets/1-min.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/2-min.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/6-min.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/rawmaterials3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/assets/3-min.png" alt="" />
                    </div>
                    <div>
                        <img src="/assets/rawmaterials4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/assets/8-min.png" alt="" />
                    </div>


                </Carousel>
            </section>
            <section className="site-section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img
                                    src="/assets/mixurun2.jpg"
                                    alt=""
                                    className="img-fluid img-shadow"
                                    loading="lazy"

                                />
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="section-title mb-3">
                                    {t('aboutUsThirdTitle')}
                                </h2>
                                <p>
                                    {t('aboutUsThirdParagraph')}
                                </p>
                            </div>
                        </div>
                    </div>
            </section>

                <div className="col-md-12">
                    <video
                        autoPlay
                        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                        playsInline
                        loop
                        muted
                        controls
                        alt=""
                        src="/assets/EVACARE.mp4"
                        loading="lazy"

                    />
                </div>



        </>
    )
}
export default About