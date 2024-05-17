import React from 'react'
import projectWp1 from '../assets/project/WP Project/project1.png'
import projectWp2 from '../assets/project/WP Project/project2.png'
import projectWp3 from '../assets/project/WP Project/project3.png'

import projectCp1 from '../assets/project/Coding Project/project1.webp'
import projectCp2 from '../assets/project/Coding Project/project2.webp'
import projectCp3 from '../assets/project/Coding Project/project3.webp'



import viLogo from '../assets/project/Design Projects/VI Logo.webp'
import glLogo from '../assets/project/Design Projects/GL-LOGO.webp'
import hbiLogo from '../assets/project/Design Projects/HBI-LOGO.webp'
import lbLogo from '../assets/project/Design Projects/lb-final-logo.webp'
import ltLogo from '../assets/project/Design Projects/LT-LOGO.webp'
import mdLogo from '../assets/project/Design Projects/MassifDesignLogo.webp'
import wlLogo from '../assets/project/Design Projects/wysiwyl-logo.webp'

import zoomBg1 from '../assets/project/Design Projects/Zoom bg-1.webp'
import zoomBg2 from '../assets/project/Design Projects/Zoom bg-2.webp'
import zoomBg3 from '../assets/project/Design Projects/Zoom bg-3.webp'

import hodieMp1 from '../assets/project/Design Projects/Hoodie Mockup.webp'
import hodieMp2 from '../assets/project/Design Projects/Hoodie Mockup 2.webp'
import hodieMp3 from '../assets/project/Design Projects/Hoodie Mockup 3.webp'

import post1 from '../assets/project/Design Projects/Posts (1).webp'
import post2 from '../assets/project/Design Projects/Posts (2).webp'
import post3 from '../assets/project/Design Projects/Posts (3).webp'
import post4 from '../assets/project/Design Projects/Posts (4).webp'
import post5 from '../assets/project/Design Projects/Posts (5).webp'
import post6 from '../assets/project/Design Projects/Posts (6).webp'
import post7 from '../assets/project/Design Projects/Posts (7).webp'
import post8 from '../assets/project/Design Projects/Posts (8).webp'
import post9 from '../assets/project/Design Projects/Posts (9).webp'
import post10 from '../assets/project/Design Projects/Posts (10).webp'
import post11 from '../assets/project/Design Projects/Posts (11).webp'
import post12 from '../assets/project/Design Projects/Posts (12).webp'
import post13 from '../assets/project/Design Projects/Posts (13).webp'
import post14 from '../assets/project/Design Projects/Posts (14).webp'


import art1 from '..//assets/project/Design Projects/Wall-Art-Mockup-1.webp'
import art2 from '..//assets/project/Design Projects/Wall-Art-Mockup-2.webp'
import art3 from '..//assets/project/Design Projects/Wall-Art-Mockup-3.webp'





const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 ' id='portfolio'>

      <div className="pb-8">
        <p className="text-4xl mb-3 font-bold primary-color"> My Projects </p>
        <p className="text-white font-extrabold ">  WordPress Projects : </p>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[220px] bg-cover relative "> 

         
          <img src={projectWp1} alt="L'ébénisterie Web Site" />

          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider">L'ébénisterie Web Site</span>
              <div className="pt-8 text-center">
                <a href="https://www.l-ebenisterie.com/" target="_blank" rel="noopener noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See Website 
                  </button>
                </a>
              </div>
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[220px] bg-cover relative "> 
          <img src={projectWp2} alt="HBI Web Site" />

          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center" >
            <span className="text-2xl font-bold text-white tracking-wider"> HBI Web Site</span>
              <div className="pt-8 text-center">
                <a href="https://hbimprovement.com/" target="_blank" rel="noopener noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See Website 
                  </button>
                </a>
              </div>
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[220px] bg-cover relative "> 
          <img src={projectWp3} alt="Luna Foliage Online Store" />

          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Luna Foliage Online Store</span>
              <div className="pt-8 text-center">
                <a href="https://lunafoliage.com/" target="_blank" rel="noopener noreferrer" >
                  <button  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    See Website 
                  </button>
                </a>
              </div>
          </div>
         </div>

         

      </div> <br />



      <div className="pb-8">
        <p className="text-white font-extrabold ">  Coding Projects  </p>
      </div>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[180px] bg-cover relative "> 

         
          <img src={projectCp1} alt="MERN Social Media App" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> MERN Social Media App  </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/M-Machit/React-Social-Media-App-MERN" target="_blank" rel="noopener noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Project Code
                  </button>
                </a>
              </div>
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[180px] bg-cover relative "> 
          <img src={projectCp3} alt="React Candy Crush Game" />

          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> React Candy Crush Game  </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/M-Machit/CandyCrush-ReactApp" target="_blank" rel="noopener noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Project Code
                  </button>
                </a>
              </div>
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[180px]  bg-cover relative "> 
          <img src={projectCp2} alt="Laravel Crud" />

          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Laravel Crud </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/M-Machit/Laravel-crud" target="_blank" rel="noopener noreferrer" >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Project Code 
                  </button>
                </a>
              </div>
          </div>
         </div>

         

      </div> <br />

      


      {/* Design Project */ }


      <div className="pb-8">
        <p className="text-white font-extrabold ">  Design Projects </p>
        
      </div>
      <h1 className='text-gray-400  font-extrabold my-4'> Logos : </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white"> 
         
          <img src={viLogo} alt="vanward international Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Vanward International Logo  </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white"> 
         
          <img src={glLogo} alt="Groupe Lebenisterie Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Groupe Lebenisterie Logo  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white "> 
         
          <img src={hbiLogo} alt="Home and Business Improvement Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> HBI Logo  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white "> 
         
          <img src={lbLogo} alt="Lebenisterie Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Lebenisterie Logo </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white "> 
         
          <img src={mdLogo} alt="Massif Design Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Massif Design Logo </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white "> 
         
          <img src={ltLogo} alt="La Tapisserie Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> La Tapisserie Logo </span>
              
          </div>
         </div> 

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[280px] bg-cover relative  bg-white "> 
         
          <img src={wlLogo} alt="WYSIWYL Logo" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> WYSIWYL Logo </span>
              
          </div>
         </div> 

      </div>


      <h1 className='text-gray-400  font-extrabold my-4'> Social Media Posts : </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post1} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post2} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post13} alt="Social Media Post"/>
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post14} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post12} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post  </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post3} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post4} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post5} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post6} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post7} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post9} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post10} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post8} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[380px] bg-cover relative "> 
         
          <img src={post11} alt="Social Media Post" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Social Media Post </span>
              
          </div>
         </div>
      </div>

      


      <div className="pb-8">
        
      </div>
      <h1 className='text-gray-400  font-extrabold my-4'> Virtual Zoom Background : </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white"> 
         
          <img src={zoomBg1} alt="Virtual Zoom Background" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> S.S.A.M.S Methode </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white"> 
         
          <img src={zoomBg2} alt="Virtual Zoom Background" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> S.S.A.M.S Methode  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white "> 
         
          <img src={zoomBg3} alt="Virtual Zoom Background" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> S.S.A.M.S Methode   </span>
              
          </div>
         </div>


         
         

      </div>

      <div className="pb-8">
        
      </div>

      <h1 className='text-gray-400  font-extrabold my-4'> Hoodies Mockup : </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white"> 
         
          <img src={hodieMp1} alt="Hoodie Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Hoodie Mockup </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white"> 
         
          <img src={hodieMp2} alt="Hoodie Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Hoodie Mockup  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[200px] bg-cover relative  bg-white "> 
         
          <img src={hodieMp3} alt="Hoodie Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Hoodie Mockup </span>
              
          </div>
         </div>
      </div>




      <h1 className='text-gray-400  font-extrabold my-4'> Wall Art Mockup : </h1>
      
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">

      <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[500px] bg-cover relative  bg-white"> 
         
          <img src={art1} alt="Wall Art Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Wall Art Mockup </span>
              
          </div>
         </div>


         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[500px] bg-cover relative  bg-white"> 
         
          <img src={art2} alt="Wall Art Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Wall Art Mockup  </span>
              
          </div>
         </div>

         <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
         shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center 
         h-[500px] bg-cover relative  bg-white "> 
         
          <img src={art3} alt="Wall Art Mockup" />
  
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col 
                          justify-center items-center">
            <span className="text-2xl font-bold text-white tracking-wider"> Wall Art Mockup </span>
              
          </div>
         </div>
      </div>



      


     


    </div>

  ) 
}

export default Work
