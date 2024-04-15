import React from 'react';
import BlobComponent from './BlobComponent';
import { LiaGithub,LiaLinkedin  } from "react-icons/lia";

import { FaXTwitter } from "react-icons/fa6";


const Hero = () => {
  return (
    <section className='flex justify-center items-center position-fixed mt-20 top-0 left-0 right-0 bottom-0 z-1 gap-20'>
      <div className='flex flex-col relative text-start z-1'>
        <h1 className='text-6xl color-[#2D2E32] font-bold'>Front-End React <br />Developer</h1>
        <img className='absolute top-16 right-28 ' src="./src/assets/waving.png" width={60} height={60} alt="" />
        <p className='mt-8 mb-8'>
          Hi, I'm Chandra Shekhar Maurya. A passionate Front-end React<br />Developer from India.
          </p>
          <ul className='flex items-center gap-4'>
            <li><a href='#' className='twitter  hover:text-blue-500'><FaXTwitter size={25}/></a></li>
            <li><a href='#' className='linkedin  hover:text-blue-500'><LiaLinkedin size={25}/></a></li>
            <li><a href='#' className='github hover:text-blue-500' > <LiaGithub size={25}/></a></li>
          </ul>
      </div>

      <div className="z-1">
        <BlobComponent />
      </div>
    </section>
  )
}

export default Hero;
