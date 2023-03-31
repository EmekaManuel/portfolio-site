import React from 'react'

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto  h-full'>
            <div className=''>
              
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Kindly Submit the Form Below. Looking Forward to Connecting With You ! </p>
            </div>

            <div
                
                 viewport={{ once: false, amount: 0.4 }} className='flex justify-center items-center'>
                <form action="https://getform.io/f/1fdac298-8043-402d-9066-626fcdf0573f" method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' 
                    placeholder='Enter Your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '  />
                    <input type="email" name='email' 
                    placeholder='Enter Your Email' className='p-2 my-3 bg-transparent border-2 rounded-md text-white focus:outline-none '  />
                   
                   <textarea name="message" id="" cols="30" placeholder='Your Message ... '
                   rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-3 py-1 mx-auto my-2 flex items-center
                    hover:scale-105 duration-300 rounded-md'>Let's Connect</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact