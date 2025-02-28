import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Slider from 'react-slick'
import { nanoid } from 'nanoid'
import { useGlobalContext } from '../context'


const MarketGrid = () => {
    const data=useLoaderData()

    const {items,setItems}=useGlobalContext();

    useEffect(()=>{
        setItems(data)
     },[])
    if(items.length==0){


        return (<>
                <div className="loading"></div>
            </>)
    }



    // filterItems()


     console.log(data)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }


    return (

        <div className=' slider-container max-w-screen w-screen mx-auto  '>

            <Slider {...settings}>


                {items.map((item, index) => {
                    const { id,
                        symbol,
                        name,
                        currency,
                        stockExchange,
                        exchangeShortName,
                    } = item;





                    return (

                        <div key={id} className='flex'>

                            <a className="market-instrument">
                                <div className="market-instrument__arrow market-instrument__arrow">
                                    <div className="icon-arrow-right-full">
                                    </div>
                                </div>
                                <div className="ui-block ui-block_type-grid ui-block_gap-s ui-block_direction-column ui-block_justifyType-between">
                                    <div className="market-instrument__text ui-block ui-block_type-flex ui-block_direction-column ui-block_justifyType-between">
                                        <div className="market-instrument__text-name ui-text ui-text_size-l ui-text_type-alternative ui-text_fontWeight-600">
                                            { symbol}</div>
                                        <div className="market-instrument-prices ui-text ui-text_type-ghost">{exchangeShortName} / {currency}</div>
                                    </div>
                                    <span className="ui-button-layout ui-button-layout_passive ui-button-layout_s position-relative ">
                                        <span className="ui-button-layout-container"> <div><span className="ui-button-layout-content">
                                            Trade </span>
                                        </div>
                                        </span>
                                    </span>
                                </div>
                            </a>
                        </div>


                    )
                })}

            </Slider>
        </div>
    )

}

export default MarketGrid