import React from 'react'
import heroimage from '../assets/profile.jpg'
import { TypeAnimation } from 'react-type-animation'
import { AiFillInstagram,AiFillGithub,AiFillLinkedin } from "react-icons/ai";


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto py-8 bg-black'>

        <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] ">

              <img  className='rounded-full  shadow-lg shadow-[#31B7C2]' src={heroimage} alt=" hero image" />

        </div>
        <div className="col-span-2 px-5">


          <h1 className="text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold">
            <span className="primary-color">
            I'm a
            </span> <br />
            <TypeAnimation 
            sequence={[
                "Full Stack Developer",
                2000,
                "And",
                1000,
                "Designer",
                2000

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            />
          </h1>

          <p className="text-white sm:text-lg my-6 lg:text-xl">
          I'm a skilled web developer and graphic designer who specializes in creating captivating online experiences.
          I also have expertise in crafting effective Facebook and TikTok ad campaigns that deliver results.
          </p>

          <div className="my-8">
              
              <a href="#contact" className='px-6 py-3 w-full rounded-xl 
              border border-gray-400 hover:bg-gradient-to-br from-[#31B7C2] to-[#7BC393] text-white hover:border-none'>
                Get in Touch
              </a>

          </div>
            <div className='text-white  sm:text-lg my-6 lg:text-4xl flex space-x-4 '>
                <a href="https://www.linkedin.com/in/mohammed-machit-94605422b/" target='_blank' className='text-4xl'>  <AiFillLinkedin /></a>
                <a href="https://github.com/M-Machit" target='_blnak' className='text-4xl'> <AiFillGithub /> </a>
                <a href="https://www.instagram.com/simo.machit_01?igsh=cWZrdWVjdHR4Nmpi" target='_blank' className='text-4xl' > <AiFillInstagram /> </a>
            </div>
        </div>
      
    </div>

  )
}

export default Hero
