import React from 'react'
import MarketGrid from './MarketGrid'
import Catogories from './Catogories'

const MarketContainer = () => {
  return (

    <>
      <div className="superior-trading">
        <div className="market-list w-full">

          <div className="ui-block ui-block_type-flex">
            <MarketGrid />



          </div>


        </div>

        <div className="superior-trading__container flat-container">

          <div className="superior-trading__overlay">
                <Catogories/>

          </div>
        </div>


      </div>




    </>
  )
}

export default MarketContainer