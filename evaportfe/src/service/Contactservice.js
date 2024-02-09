const BASEURL = 'http://localhost:3333/evaport/contact';

const sendContactForm = async (contactData) => {
    try {
        const response = await fetch(BASEURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contactData)
        });
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    } catch (error) {
        console.error('Hata:', error);
        throw error;
    }
};
const ContactService ={
    sendContactForm,
}

export default ContactService;
