import React from 'react'
import about from '../assets/about.png'

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id='about'>
      <div className="md:grid md:grid-cols-2 sm:py-16">

        <div className="mt-4 md:mt-0 text-left flex py-6 md:py-0">
            <div className="my-auto mx-6">
                <h2 className="text-4xl font-bold mb-4 primary-color">About Me </h2>
                <p className="text-base lg:text-lg">
                Full Stack Developer | Adobe Creative Suite | Facebook & TikTok Ads | WordPress <br />
                I'm Mohammed Machit, a dedicated and skilled Full Stack Developer with expertise in various technologies and a creative background in Adobe Photoshop, Illustrator, and Premier Pro. 
                I specialize in developing Web sites and user-friendly web applications while leveraging my design skills to create visually appealing digital experiences.
                </p>
            </div>
        </div>

        <img src={about} width={600} height={600} alt="" className="mx-auto raounded-3xl py-8 md:py-0 " />
      </div>
    </div>
  )
}

export default About
