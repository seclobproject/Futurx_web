import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import { Link } from 'react-router-dom';
const Footer = () => {
    const [mail, setMail] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('message', mail)

        try {
            await fetch('https://formspree.io/f/xyyrdbwj', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            alert('Message sent successfully!');
            setMail('')
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    }
    return (
        <footer className="flex w-full">
           
        </footer>
    )
}

export default Footer