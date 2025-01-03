import React, {useEffect, useRef} from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const About = () => {
    const [openModalVideo, setOpenVideo] = useState(false); //set true cause of would like to when about layer opened video is opened
    const videoRef = useRef(null);


    const openVideo = () => {
        setOpenVideo(!openModalVideo);
        console.log("modal Opened");
    }

    const closeModal = () => {
        setOpenVideo(false);
        console.log("clicked close modal");
        if(videoRef.current){
            videoRef.current.pause();
        }

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
            console.log("sdfjhsjkf")
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
                            <div className="mx-auto w-75">
                                <button id="aboutButtonVideo" onClick={openVideo}> <span>{t('aboutButtonVideo')}</span></button>
                                <div className={`modal ${openModalVideo ? 'open' : ''}`}>
                                    <div className="modal-content" id="modalContent">
                                        <video
                                            style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                                            playsInline
                                            loop
                                            controls
                                            ref={videoRef}
                                            alt=""
                                            src="/assets/EVAportvideo.mp4"
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
                            <img src="/assets/inovasyonImg.jpg" alt="" className="img-fluid img-shadow" id="firstImgInAbout" />
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
            <section className="site-section">
                <div className="container">
                    <div className="row align-items-center" id="aboutSecondpara">
                        <div className="col-lg-5 ml-auto">
                            <h2 className="section-title mb-3">
                                {t('aboutUsSecondTitle')}
                            </h2>
                            <p>
                                {t('aboutUsSecondParagraph')}
                            </p>
                            <p className="mt-4">
                                <a style={{textTransform:"capitalize"}} href="/eva/product" className="spepcial_link">
                                    {t('homeAboutUsLink')}
                                </a>
                            </p>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img
                                src="/assets/taban1234.jpeg"
                                alt=""
                                className="img-fluid img-shadow"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="carouselSection">
                <Carousel  autoPlay interval={2000} infiniteLoop >

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
                        <img src="/assets/evasonimage.jpeg" alt="" />
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
                            <div className="col-lg-6 mb-5 mb-lg-0" id="grassId1">
                                <img
                                    src="/assets/grassWorld.jpg"
                                    alt=""
                                    className="img-fluid img-shadow"
                                    loading="lazy"
                                    id="grassId2"
                                />
                            </div>
                            <div className="col-lg-5 ml-auto">
                                <h2 className="section-title mb-3" id="grassId3">
                                    {t('aboutUsThirdTitle')}
                                </h2>
                                <p id="grassId4">
                                    {t('aboutUsThirdParagraph')}
                                </p>
                            </div>
                        </div>
                    </div>
            </section>

                <div className="col-md-12">
                    <video
                        style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
                        playsInline
                        loop
                        controls
                        alt=""
                        src="/assets/EVAportvideo.mp4"
                        loading="lazy"

                    />
                </div>



        </>
    )
}
export default About