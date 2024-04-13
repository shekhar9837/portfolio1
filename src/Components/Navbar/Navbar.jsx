import React from 'react'
import {useState} from "react"
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick=()=> { setIsOpen(!isOpen);}


  return (
    <div className='flex justify-between position:sticky px-14 py-8 shadow-md font-semibold'>
        <div>
            <span className='font-bold text-xl '>Chandra Shekhar</span>
        </div>
        <div className='flex '>
            <ul className='flex flex-row gap-6 text-medium font-semibold'>
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>

{/* 
            <button onClick={handleClick}>
        {isOpen? <CiMenuBurger/>: <RxCross1/>} </button> */}
    </div>
  )
}

export default Navbar
