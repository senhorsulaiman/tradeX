import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
const Links = ({ page, section }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <button key={nanoid()} className={isOpen?`w-full cursor-pointer  text-lg px-4 py-2 capitalize flex justify-between items-center border-blue-800 border-b border-b-2 `:`w-full cursor-pointer  text-lg px-4 py-2 capitalize flex justify-between items-center` } onClick={() => setIsOpen(!isOpen)}><span className={isOpen?'text-blue-800':''}> {page}</span>
              {isOpen?<FaAngleUp/>: <FaAngleDown />}



            </button>

            {isOpen &&

                <div className='bg-blue-300 px-4 py-2'>

                    {section.map((item) => {
                        const { id, label, links } = item

                        return (<div key={id} >
                            <h6 className='text-xs text-blue-800 my-2 uppercase '>{label}</h6>

                            <div className='text-md flex flex-col '>

                                {links.map((link) => {
                                    const { id, url, label } = link
                                    return <a key={id} href={url} className='pl-2 capitalize my-2'> {label}</a>
                                })}
                            </div>

                        </div>)
                    })}
                </div>
            }

        </>

    )
}

export default Links
