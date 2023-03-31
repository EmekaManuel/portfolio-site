import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import nextjs from '../assets/nextjs.png'
import nodejs from '../assets/node.png'

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Experience = () => {

    const techStacks = [
        {
            id:1,
            title:'HTML',
            src:html,
            style:'shadow-orange-500',
        },
        {
            id:2,
            title:'CSS',
            src:css,
            style:'shadow-blue-500',
        },
        {
            id:3,
            title:'JavaScript [ES-6]',
            src:javascript,
            style:'shadow-yellow-500',
        },
        {
            id:4,
            title:'Tailwind CSS',
            src:tailwind,
            style:'shadow-sky-400',
        },
        {
            id:5,
            title:'React',
            src:reactImage,
            style:'shadow-blue-600',
        },
        {
            id:6,
            title:'Git / Github',
            src:github,
            style:'shadow-gray-500',
        },
        {
            id:7,
            title:'Next Js',
            src:nextjs,
            style:'shadow-white',
        },
        {
            id:8,
            title:'Node Js',
            src:nodejs,
            style:'shadow-green-500',
        },
    ]

  return (
    <div  name='experience' className='bg-gradient-to-b from-black pt-16  md:pt-0 to-gray-800 text-white md:h-screen' >
        <div className= 'max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div 
     >
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Tech Stack</p>
                <p className='py-6'>These are technologies I have worked with</p>
            </div>

            <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-8 px-12 py-6 sm:px-0 text-center' >

                {
                    techStacks.map(({id, title, src, style}) => (
                        
                    <div
                  
                    key={id} className={`shadow-lg  hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }


            </div>
        </div>
    </div>
  )
}

export default Experience