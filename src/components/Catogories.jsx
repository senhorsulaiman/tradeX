import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context'
import { useLoaderData } from 'react-router-dom'
// import { useLoaderData } from 'react-router-dom';

const Catogories = () => {
    const { setItems, category, setCategory } = useGlobalContext();
    const data = useLoaderData()
    const allCategories = ['Popular', ...new Set(data.map((item) => item.exchangeShortName))];

    return (
        <div className="markets-tabs container hide-scroll-bar justify-start capitalize">
            {allCategories.map((item, index) => {



                return <li className={`${category === item ? 'market-categories_active' : ''} market-categories'`} key={item}>

                    <button key={index} type="button" className={`${category === item ? 'market-categories__item_active' : ''} market-categories__item ui-text ui-text_size-m ui-text_lineHeight-100 ui-text_fontWeight-500 ui-text_type-alternative`} onClick={() => {



                        if (item === 'Popular') {

                            setItems(data)
                            setCategory(item)
                            return
                        }
                        const newItems = data.filter((i) => i.exchangeShortName === item)
                        setItems(newItems)

                        setCategory(item)

                    }




                    }>{item} </button>

                </li>
            })}

        </div>
    )
}

export default Catogories