import React from 'react'
import html from '../assets/icons/html.png'
import css3 from '../assets/icons/css3.png'
import tailwind from '../assets/icons/tailwind.png'
import javascript from '../assets/icons/javascript.png'
import react from '../assets/icons/react.png'
import sql from '../assets/icons/sql.png'
import mysql from '../assets/icons/mysql.png'
import php from '../assets/icons/php.png'
import python from '../assets/icons/python.png'
import mongodb from '../assets/icons/mongodb.png'
import nodejs from '../assets/icons/nodejs.png'
import wordpress from '../assets/icons/wordpress.png'
import git from '../assets/icons/git.png'
import github from '../assets/icons/github.png'
import laravel from '../assets/icons/laravel.png'
import docker from '../assets/icons/docker.png'
import photoshop from '../assets/icons/photoshop.png'
import illustrator from '../assets/icons/illustrator.png'
import premierpro from '../assets/icons/premierpro.png'





const Skills = () => {
  return (
    <div className='border border-gray-600 bg-black text-gray-400  max-w-[1200px] mx-auto grid grid-cols-3 
                    md:grid-cols-7 md:gap-y-8 py-10
                    place-items-center  '> 

        <h2 className="text-white text-xl md:text-4xl font-bold m-4">
            My <br /> Skills : <br />  
        </h2>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={html} alt="html" width={100} height={100} />
            <p className='mt-2'>Html </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={css3} alt="css3" width={100} height={100} />
            <p className='mt-2'>Css </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={tailwind} alt="tailwind" width={100} height={100} />
            <p className='mt-2'>Tailwind </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={javascript} alt="javascript" width={100} height={100} />
            <p className='mt-2'>Javascript </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={react} alt="react" width={100} height={100} />
            <p className='mt-2'>React </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={nodejs} alt="nodejs" width={100} height={100} />
            <p className='mt-2'>NodeJs </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={python} alt="python" width={100} height={100} />
            <p className='mt-2'>Python </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={php} alt="php" width={100} height={100} />
            <p className='mt-2'>Php </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={laravel} alt="laravel" width={100} height={100} />
            <p className='mt-2'>Laravel </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={sql} alt="sql" width={100} height={100} />
            <p className='mt-2'>Sql </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={mysql} alt="mysql" width={100} height={100} />
            <p className='mt-2'>Mysql </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={mongodb} alt="mongodb" width={100} height={100} />
            <p className='mt-2'>Mongodb </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={wordpress} alt="wordpress" width={100} height={100} />
            <p className='mt-2'>Wordpress </p>
        </div> 

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={docker} alt="docker" width={100} height={100} />
            <p className='mt-2'>Docker </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={git} alt="git" width={100} height={100} />
            <p className='mt-2'>Git </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={github} alt="github" width={100} height={100} />
            <p className='mt-2'>Github </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={photoshop} alt="photoshop" width={100} height={100} />
            <p className='mt-2'>Photoshop </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={illustrator} alt="illustrator" width={100} height={100} />
            <p className='mt-2'>Illustrator </p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[80px] md-w-[100px]">
            <img src={premierpro} alt="premierpro" width={100} height={100} />
            <p className='mt-2'>PremierPro</p>
        </div>
      
    </div>
  )
}

export default Skills
