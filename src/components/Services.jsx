import React from 'react'

function Services() {
  return (
    <div>
      <div className="max-w-[1200px] md:py-[80] py-5 mx-auto ">
        <h1 className="text-4xl text-center text-white"> Services </h1>
      </div>

      <div className="max-w-[1200px] mx-auto py-[30px] grid lg:grid-cols-4 sm:grid-cols-2 gap-6  ">
        <div className="group shadow-lg p-4 text-center text-white">
            <i className='fas fa-laptop-code text-2xl'></i>
            <h3 className="text-xl py-2">Web Develpment </h3>
        </div>
      </div>
    </div>
  )
}

export default Services
