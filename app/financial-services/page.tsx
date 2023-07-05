import React from 'react'
import FinancialCards from '../Components/financial/FinancialCards';
import Technical from '../Components/Technical';
import { Financialdata,financepage } from '../backend/data';
import Ourwork from '../Components/OurWork/Ourwork';
import Wave from '../Components/Wave';

const Financialservices = () => {
  return (
    <div>
        <Technical item={financepage} />
        <div className='h-[200px] mb-6 max-[900px]:hidden'>
      <Wave />
     </div>
        <FinancialCards item={Financialdata}/>

        <Ourwork />
    </div>
  )
}

export default Financialservices