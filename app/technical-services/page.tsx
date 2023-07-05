import React from 'react'
import FinancialCard from '../Components/financial/FinancialCard';
import { techServices,financepage,techbannerpage } from '../backend/data';
import Technical from '../Components/Technical';
import Wave from '../Components/Wave';
import Ourwork from '../Components/OurWork/Ourwork';

const tech = () => {
  return (
   <>
        <Technical item={techbannerpage} />
        <div className='h-[200px] mb-6 max-[900px]:hidden'>
      <Wave />
     </div>
    <div className='flex flex-wrap w-full justify-center items-center'>
            <FinancialCard item={techServices}/>
    </div>

    <Ourwork />
    </>
  )
}

export default tech