import React, { useContext } from 'react'
import { Hero, Instrument,AccountTypes } from '../components'
import axios from 'axios';

import MarketContainer from '../components/MarketContainer';
import OurFeature from '../components/OurFeature';
import Platforms from '../components/Platforms';
import MarketItems from '../components/MarketItems';


const url='https://faux-api.com/api/v1/currencypairs_835035043746198'
// 'https://jsonplaceholder.typicode.com/users'

export const loader =async() => {

   try{

    const response=await fetch(url);
    const json=await response.json();
    const data=json.result;
    return data



  }
   catch(error){
    return error
  }


}
const Landing = () => {

  return (
    <>
        <Hero />
        <MarketContainer/>
        <OurFeature/>
        <div className="vertical-container">

        <Instrument/>
          </div>

        <div className="vertical-container">

          <AccountTypes/>
        </div>
        <div className="vertical-container">
          <Platforms/>
        </div>
        <div className="vertical-container">
          <MarketItems/>
        </div>








    </>
  )
}

export default Landing