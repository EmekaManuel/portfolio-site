import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll/modules'


const NavBar = () => {

  const [nav, setNav] = useState(false)

  // ***************** links ******************* //
  const links = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    }
  ]
  // ***************** links ******************* //



  return (
  <div className='flex justify-between items-center bg-black p-4 text-white
      px-4 w-full h-20 fixed '>
    <div>
      <h2 className=' capitalize font-medium text-gray-200 text-[20px]'> Emeka <span className='text-sky-500'> Manuel </span> </h2>
    </div>
    

    <ul className='md:flex hidden'>
      {links.map(({link, id}) => (
        <li key={id}
        className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
           
          <Link to={link} smooth duration={600}> {link} </Link>
        
        </li>
      ))}
    </ul>


    <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
     { nav ?  <FaTimes size={20}/> : <FaBars size={20}/>}
    </div>
    
    {nav && 
    (
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray '>
      {links.map(({link, id}) => (
        <li key = {id}
        className='px-4 py-6 cursor-pointer text-3xl capitalize font-medium text-gray-400 hover:scale-105 duration-200' >

        <Link to={link} smooth duration={600} onClick={() => setNav(!nav)}> {link} </Link>

        </li>
      ))}
    </ul> 
    )
    }


  </div>
  )
}

export default NavBar