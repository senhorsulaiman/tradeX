import React, { useRef } from 'react'
import {sublinks} from '../data'
import { useGlobalContext } from '../context';

import { FaAngleRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Submenu = () => {
    const { currentNavId, setCurrentNavId } = useGlobalContext()
    const currPage = sublinks.find((item) => item.pageId === currentNavId);
    // const {pageId,section,page,banner}=currPage;
    const submenuContainer = useRef()
    // const { page, section}=currPage;

    const handleSubmenu = (event) => {
        const submenu = submenuContainer.current;
        // console.log(submenu.getBoundingClientRect());
        const { left, right, bottom } = submenu.getBoundingClientRect();
        const { clientX, clientY } = event;
        if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
            setCurrentNavId(null)
        }

    }

    // console.log(currPage)

    return (
        <>
            {currPage &&

                <div className={currPage.section.length > 0 ? 'main-menu-group-desktop fixed top-16 left-0 right-0 w-full visible menu-group pt-8 pb-12 hidden lg:block h-max-content bg-gray-100' : 'hidden'} ref={submenuContainer} onMouseLeave={handleSubmenu}>

                    <div className="flat-container max-w-7xl mx-auto">
                        <div className={`menu-group__container grid  gap-x-8 ${currPage.section.length < 3 ? ' grid-cols-3' : ' grid-cols-4'}`} >

                            {currPage.section.map((item) => {
                                const { label, id, links } = item;
                                return (<div key={id} className="main-menu-category flex flex-col">
                                    <div className="main-menu-category__title uppercase text-xs pt-4 mx-10 pb-4   border-b-gray-100  font-bold text-gray-400">
                                        {label}



                                    </div>
                                    <ul className='pl-5   flex flex-col main-menu-category__links main-menu-category__links_two-columned'>
                                        {links.map((item) => {
                                            const { id, label, url } = item;
                                            return (<li key={id} className='' >
                                                <NavLink to={url} className='capitalize pl-5 pt-4 pr-10 pb-5  text-md xl:text-lg main-menu-category__link flex gap-x-1 items-center group justify-between'>
                                                    {label}<FaAngleRight className='group-hover:block hidden' />

                                                </NavLink>



                                            </li>)
                                        })}

                                    </ul>

                                </div>)




                            })}







                        </div>
                    </div>
                </div>

            }



        </>
    )
}

export default Submenu