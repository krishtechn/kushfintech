'use client'
import Technical from './Components/Technical';
import LogoSection from './Components/LogoSection';
import WorkingProcess from './Components/working_process/WorkingProcess';
import FinancialCards from './Components/financial/FinancialCards';
import OurWork from './Components/OurWork/Ourwork';
import { Financialdata,techServices } from './backend/data';
import { Financialsector ,Ourfeaturesdata} from './backend/data';
import TechnologyUsed from './Components/technologyused/TechnologyUsed';
import Wave from './Components/Wave';
import OurFeatures from './Components/OurFeatures/OurFeatures';

export default function Home() {

  // interface Financialsector{
  //   id:number,
  //   title:string,
  //   desc:string,
  //   btn:string,
  //   img:string,
  //   link:string,
  // }

  return (
    <div>
      <Technical item={Financialsector} />

     <div className='md:h-[200px] max-[900px]:hidden'>
      <Wave />
     </div>

      <div>
      <LogoSection />
      <WorkingProcess />
      <FinancialCards item={Financialdata} />
      
      <FinancialCards item={techServices}/>
      <TechnologyUsed />
      <OurFeatures item={Ourfeaturesdata}/>

      <OurWork />

      </div>
      </div>
  )
}
