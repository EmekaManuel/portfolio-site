import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'



const SocialLinks = () => {
  const links = [
    {
      id:1,
      child: (
        <>
        Linkedin <FaLinkedin size={20}/>
        </>
      ),
      href:'https://linkedin.com/in/emmanuel-onyewuchi-16119023b',
      style:'rounded-tr-md'
    },
    {
      id:2,
      child: (
        <>
        Github <FaGithub size={20}/>
        </>
      ),
      href:'https://github.com/EmekaManuel',
   
    },
    {
      id:3,
      child: (
        <>
        Twitter <FaTwitter size={20}/>
        </>
      ),
      href:'https://twitter.com/marrnuel_',
   
    },
    {
      id:4,
      child: (
        <>
        Email <HiOutlineMail size={20}/>
        </>
      ),
      href:'mailto:marrnuel12@gmail.com',
    },
    // {
    //   id:5,
    //   child: (
    //     <>
    //     LinkTree <FaLink size={20}/>
    //     </>
    //   ),
    //   href:'https://linktr.ee.com/marrnuel',
    // }
    // {
    //   id:4,
    //   child: (
    //     <>
    //     Resume <BsFillPersonLinesFill size={20}/>
    //     </>
    //   ),
    //   href:'##',
    //   style: 'rounded-br-md',
    //   download: true,
    // }
  ]






  return (
    <div className=' lg:flex flex-col left-0  fixed lg:top-[35%] bottom-[3%]'>
        <ul>

          {links.map(({ id, href, child, style, download}) => (


            <li key={id} className={'flex justify-between items-center w-40 px-4 bg-gray-600 h-10 ml-[-110px] hover:rounded-md hover:ml-[-10px] duration-300'  + style}>


              <a href={href} 
              className='flex justify-between items-center w-full text-white'
              download={download}
              target='_blank'
              rel='noreferrer'
              >
                {child}
                    
              </a>
              </li>
          ))}

         
        </ul>
    </div>
  )
}

export default SocialLinks