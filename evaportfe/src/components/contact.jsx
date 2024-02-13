import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import {useTranslation} from "react-i18next";
import ContactService from '../service/Contactservice';
import {Modal, Spinner} from "react-bootstrap";



const ContactForm = () => {
const [loading, setLoading]=useState(false);
const[showModal, setShowModal]=useState(false);
    const {t} = useTranslation();
// Form verilerini tutmak için state
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        body: ''
    });

    // Form alanlarındaki değişiklikleri işleyen fonksiyon
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form submit işlemi
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);//loading is true
        try {
            await ContactService.sendContactForm(formData);
            console.log('Form başarıyla gönderildi');
            // Başarılı submit sonrası işlemler
            setFormData({
                email: '',
                name: '',
                subject: '',
                body: ''
            });
            setShowModal(true);
        } catch (error) {
            console.error('Form gönderilirken hata oluştu:', error);
            // Hata durumunda yapılacak işlemler
        }finally {
            setLoading(false);//loading close
        }
    };
    return (
        <>
            <section
            style={{ backgroundImage: 'url("/assets/contactLines.jpeg")' }}
            className="home-section section-hero overlay slanted position-relative"
            id="home-section">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-md-8 text-center" id="evaPortWelcome">
                        <h1 style={{fontWeight:"bold"}}>{t('contactMainTitle')}</h1>
                    </div>
                </div>
            </div>
        </section>
            <div className="container">
                <div className="contactCont">
                <form className="col-md-6" onSubmit={handleSubmit} >
                    <h1>{t('contactMainTitle')}</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">{t('contactFormEmailAddress')}<span className="text-danger"> *</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="form-control"
                            id="exampleInput"
                            placeholder={t('contactFormEmailAddressPlaceholder')}
                            value={formData.email}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>{t('contactFormFullName')}<span className="text-danger"> *</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="form-control"
                            id="exampleInput"
                            placeholder={t('contactFormFullNamePlaceholder')}
                            value={formData.name}
                            onChange={handleChange}

                        />
                    </div>
                    <div className="form-group">
                        <label>{t('contactFormSubject')}<span className="text-danger"> *</span>
                        </label>
                        <input
                            name="subject"
                            type="text"
                            className="form-control"
                            id="exampleInput"
                            placeholder={t('contactFormSubjectPlaceholder')}
                            value={formData.subject}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('contactFormBody')}<span className="text-danger"> *</span>
                        </label>
                        <textarea
                            name="body"
                            type="textarea"
                            className="form-control"
                            id="exampleInput"
                            placeholder={t('contactFormBodyPlaceholder')}
                            value={formData.body}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {t('contactFormSubmitButton')}
                    </button>
{/*
                    Spinner Section
*/}
                    <div className="col-md-12 pt-3">
                        {loading && <Spinner animation="border" variant="primary" />}
                    </div>
                </form>
                    <div className="col-md-6" id="addressSection">
                        <h3>{t('contactInfoTitle')}</h3>
                        <div className="contactInfo">
                            <FontAwesomeIcon icon={faEnvelope} />
                        <div className="mailInfo">
                            {t('contactInfoMail')}
                        </div>
                            <FontAwesomeIcon icon={faPhone} />
                            <div className="telephoneInfo">
                                {t('contactInfoPhone')}
                        </div>
                            <FontAwesomeIcon icon={faLocationDot} />
                        <div className="openAddress">
                            {t('contactInfoAddress')}
                        </div>
                        </div>
                        <div className="mapEmbed">
                            <iframe
                                title="map"
                                width={370}
                                height={250}
                                id="gmap_canvas"
                                src={t('contactInfoMapAddress')}
                            />{" "}
                        </div>
                    </div>
                </div>
            </div>
{/*
            Confirm Section
*/}
             <Modal
                size="sm"
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body className="modalbody">
                    <div className="check">
                    </div>
                </Modal.Body>
            </Modal>

</>
    );
};
export default ContactForm;
