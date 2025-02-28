import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { MdClose } from 'react-icons/md'
import Navlinks from './Navlinks'



const Navbar = () => {
    const  {toggleSidebar ,isSidebarOpen}=useGlobalContext();
  return (
    <nav className='max-w-7xl mx-auto flex justify-between py-2  px-4 '>


        <div className="logo text-2xl font-bold ">

           TradeX
        </div>

        <button className='w-10 h-10 text-blue-800 rounded-full bg-blue-200 tex-blue flex justify-center items-center lg:hidden ' onClick={toggleSidebar }>
                {isSidebarOpen?<MdClose/>: <FaBars/>}

        </button>

        <Navlinks/>

    </nav>
  )
}

export default Navbar