import React from 'react'
import { FaAngleRight } from 'react-icons/fa';

const SubmenuBanner = (title,text,image) => {
    // const { id, title, text, image } = banner;
    // console.log(title)
    return (
        <div className=" bg-cover w-full h-4/5 bg-black text-center" style={{ backgroundImage: `url(${image})` }}>
            <div className="pt-10 px-5  pb-10 h-full flex flex-col items-center justify-between gap-2">
                <div className="text-xl text-white font-bold">{title}</div>
                <div className="text-white text-2xl font-medium mb-auto leading-[1.1]">{text}</div>
                <button href="" className='group w-2/3 h-12 rounded-full  bg-blue-800 mt-auto btn-primary btn btn-md text-white text-sm  text-center px-2 flex gap-1 justify-center items-center '>


                    <span >Start Referring </span>
                    <span><FaAngleRight className='group-hover:opacity-100 opacity-0'/></span>

                </button>
            </div>
        </div>
    )
}

export default SubmenuBanner
