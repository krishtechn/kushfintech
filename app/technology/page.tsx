import React from 'react'
import FinancialCard from '../Components/financial/FinancialCard'
import {technologyused,technologybannerpage} from '../../app/backend/data';
import Technical from '../Components/Technical';
import Wave from '../Components/Wave';
import Ourwork from '../Components/OurWork/Ourwork';

const technology = () => {
   
  return (
   <>
        <Technical item={technologybannerpage} />
        <div className='md:h-[200px] mb-6 max-[900px]:hidden'>
      <Wave />
     </div>
    <div className='flex justify-center items-center w-full flex-wrap'>
        <FinancialCard item={technologyused}/>
    </div>

    <Ourwork />
    </>
  )
}

export default technology