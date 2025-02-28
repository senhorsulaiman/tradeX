import React, { useState } from 'react'
import {sublinks} from '../data'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { useGlobalContext } from '../context'
import { nanoid } from 'nanoid'
const Navlinks = () => {
  const {currentNavId, setCurrentNavId} = useGlobalContext()

  console.log(


  )
  return (

    <div className=' items-center hidden lg:flex'>
      {sublinks.map((item) => {
          const {pageId,page}=item;
        return <button key={pageId} className=' cursor-pointer capitalize px-3 py-4 flex gap-2 items-center main-menu-link' onMouseEnter={()=>{setCurrentNavId(pageId)}}>{page}
         <span>{pageId===currentNavId?<FaAngleUp/>:<FaAngleDown />}</span>
         </button>
      })}


    </div>)

}

export default Navlinks