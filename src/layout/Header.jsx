import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    const [toggleHeader, setToggleHeader] = useState(false)
    // const [selectedItem, setSelectedItem] = useState(null);

    const scrollTop = () => {
        window.scrollTo({ top: 0 });
        setToggleHeader(false)
    }
    // const handleItemClick = (index) => {
    //     setSelectedItem(index);
    //     scrollTop();
    // };

    const menuItems = [
        { label: 'Home', link: '/' },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
    ];
    return (
        <header className=" flex h-[100px] justify-evenly bg-[#350557] text-white items-center">
            <img className='w-[100px]' src="/src/assets/Futurx-logo.png" alt="" />
            <ul className='flex gap-6 sm:pl-[40%]'>
            {menuItems.map((item,)=>(
                <li className='font-semibold' key={item}>{item?.label}</li>
            ))}
           </ul>
           <button className='ml-4 border-2 py-2 px-4 rounded-lg'>Login</button>
        </header>
    )
}

export default Header