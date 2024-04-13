import React from 'react'
import BlobComponent from './BlobComponent'

const Hero = () => {
  return (
    <div className=' flex justify-between items-center position-fixed z-1'>
      <div className='text-start z-1'>
        <h1 className='text-6xl color-[#2D2E32] font-bold'>Front-End React<br/>Developer</h1>
        <p>
        Hi, I'm Chandra Shekhar Maurya. A passionate Front-end React<br/>Developer from India.
        <ul>
            <li><a>Github</a></li>
            <li><a>Linkedin</a></li>
        </ul>
        </p>
      </div>

      <div className="z-10">
        {/* <img className='blob' src="https://th.bing.com/th/id/OIP.kfM6gE5n_IxPxrdgZg7SigHaLH?rs=1&pid=ImgDetMain"/> */}
        <BlobComponent/>
      </div>
    </div>
  )
}

export default Hero
