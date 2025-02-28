import React, { useState } from 'react'
import {sublinks} from '../data'
import { FaAngleDown, FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa';
import Links from './Links';
import { useGlobalContext } from '../context';


const Sidebar = () => {
     const {isSidebarOpen}=useGlobalContext()
    return (
        <aside className={isSidebarOpen?'fixed w-full h-screen right-0 left-0 top-[56px] bg-white visible lg:hidden  ':'hidden lg:hidden  '}>

            {sublinks.map((sublink) => {

                const { pageId, page, section } = sublink;
                return (
                    <article  key={pageId} >



                        <Links key={pageId} page={page} section={section} />



                    </article>)
            })}
        </aside>
    )
}

export default Sidebar