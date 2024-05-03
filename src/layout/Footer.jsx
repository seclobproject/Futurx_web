import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebookF, faTwitter, faPinterest, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import logo from '../assets/Futurx-logo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
    const [mail, setMail] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

        // const formData = new FormData();

        // formData.append('message', mail)

        // try {
        //     await fetch('https://formspree.io/f/xyyrdbwj', {
        //         method: 'POST',
        //         body: formData,
        //         headers: {
        //             'Accept': 'application/json',
        //         },
        //     });

        //     alert('Message sent successfully!');
        //     setMail('')
        // } catch (error) {
        //     console.error('Error sending message:', error);
        //     alert('Error sending message. Please try again later.');
        // }
    };
    const scrollTop = () => {
        window.scrollTo({ top: 0 });
    }
    return (
        <footer id='contact' className=" w-full bg-[#2B0C47] h-auto pt-10 px-[5%] ">
            <div className="flex gap-4 items-center flex-col sm:flex-row  mt-50 pb-10 flex-wrap justify-between">
                <div className="col-xl-2 col-lg-3 mt-50 w-[100px]">
                    <Link onClick={scrollTop} className="footer__logo" to="/"
                    ><img src={logo} alt="logo"
                        /></Link>
                </div>
                <div className="col-xl-2 col-lg-4 mt-50 pl-45 pr-0">
                    <div className="footer-widget footer-widget__2">
                        <ul className='text-white flex flex-col gap-4 py-4'>
                            <li onClick={scrollTop}>
                                <Link to="/"
                                ><FontAwesomeIcon icon={faAngleRight} /> Home</Link>
                            </li>
                            <li onClick={scrollTop}>
                                <Link to="#about"
                                ><FontAwesomeIcon icon={faAngleRight} /> About</Link>
                            </li>
                            <li onClick={scrollTop}>
                                <Link to="#contact"
                                ><FontAwesomeIcon icon={faAngleRight} /> Contact</Link>
                            </li>
                            {/* <li onClick={scrollTop}>
                                    <Link to="/article"
                                    ><FontAwesomeIcon icon={faAngleRight} /> Article</Link>
                                </li> */}
                            {/* <li onClick={scrollTop}>
                                    <Link to="/contact"
                                    ><FontAwesomeIcon icon={faAngleRight} />Contact</Link>
                                </li> */}
                        </ul>
                    </div>
                </div>

                <div className=" bg-white p-10 rounded-lg">
                    <h4 className="font-semibold text-lg mb-4">Subscribe to our Newsletter</h4>
                    <form className='flex gap-2' onSubmit={sendEmail} action="">
                        <input
                            onChange={(e) => setMail(e.target.value)}
                            type="email"
                            name="email"
                            required
                            id="email"
                            placeholder="Enter Email"
                            className='p-2 border-2'
                        /><button type="submit">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex justify-center w-full py-4 border-t ">
                <div className="text-white">
                    <p>
                        Copyright ©
                        <Link onClick={scrollTop} to="/"
                        >FuturX</Link>
                        All Rights Reserved.
                    </p>
                </div>
                <div className="social__links social__links--2">
                    {/* <a href="/"><FontAwesomeIcon icon={faFacebookF} /></a>
                                <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                                <a href="/"><FontAwesomeIcon icon={faPinterest} /></a>
                                <a href="/"><FontAwesomeIcon icon={faLinkedinIn} /></a> */}
                </div>
            </div>
        </footer>
    )
}

export default Footer