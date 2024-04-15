import React, { useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5";




const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="">
            <nav className=" p-6 flex justify-between items-center w-[100%]  mx-auto shadow-md">
                <div>
                   <span className='w-16 cursor-pointer'>Chandra Shekhar Maurya</span>
                </div>
                <div className={`nav-links duration-500 md:static bg-white absolute md:min-h-fit min-h-[60vh] items-center justify-center left-0
                  ${menuOpen ? 'top-[5%]' : 'top-[-100%]'} md:w-auto  w-full flex items-center px-5
                 `}>
                    <ul className="flex  font-semibold  md:flex-row flex-col md:text-lg text-2xl md:items-center  md:gap-[1vw] gap-8">
                        <li>
                            <a className="hover:text-gray-500" href="#">Home</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">About</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Projects</a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
               
                    <div onClick={toggleMenu} className="text-3 xl cursor-pointer md:hidden">
                        {menuOpen ? (
                            <IoClose size={25}/>
                        ) : (
                            <IoMenu size={25}/>
                        )}
                    </div>
                
            </nav>
        </header>
    );
};

export default NavBar;
