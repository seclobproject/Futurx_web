import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import logo from '../assets/Futurx-logo.png'
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const menuItems = [
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Contact', link: '#contact' },
    ];

    const scrollToSection = (sectionId) => {
        const section = document.querySelector(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setShowMenu(false); // Close the menu after clicking on a menu item
        }
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu); // Toggle the menu visibility
    };

    return (
        <header className="flex sm:flex-row justify-between h-auto sm:h-[100px] bg-[#350557] text-white items-center sticky top-0 z-10 px-4 sm:px-10">
            <Fade direction="down" duration={2000} triggerOnce>
                <Link to="/">
                    <img className='w-[100px] cursor-pointer' src={logo} alt="Logo" />
                </Link>
            </Fade>
            <div className='sm:hidden'>
                {!showMenu && (
                    <button className="text-white" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )
                }

            </div>
            {showMenu && (
                <span onClick={toggleMenu} className='sm:hidden font-bold text-lg absolute right-2 top-2'>X</span>)}
            <div className={`sm:flex flex-grow items-center gap-2 justify-between ${showMenu ? 'block' : 'hidden'}`}>
                <Fade direction="down" duration={2000} triggerOnce>
                    <ul className='flex sm:flex-row gap-6 sm:pl-[40%] p-10'>
                        {menuItems.map((item) => (
                            <li onClick={() => scrollToSection(item?.link)} className='font-semibold cursor-pointer' key={item.label}>
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </Fade>
                <Fade direction="down" duration={2000} triggerOnce>
                    <Link to='https://login.futurx.vip/signin'>
                        <button className='ml-10 mb-4 sm:ml-0 sm:mb-0 border-2 py-2 px-4 rounded-lg'>Login</button></Link>
                </Fade>
            </div>
        </header>
    );
};

export default Header;
