import React from 'react'
import OurFeature from './OurFeature'
import Link from 'next/link'

const OurFeatures = ({item}:any) => {
   return (
    <div className='flex justify-center items-center flex-col overflow-hidden'>
        <Link href='/' className='text-indigo-600 font-600 capitalize md:text-[1rem] my-[1.25rem]'>Our Features</Link>
        <h1 className='font-bold md:text-[45px] flex-wrap text-center text-[#111827] text-[35px]  md:w-[500px] mx-5' style={{lineHeight:"50px"}}>Built and Designed with you in Mind</h1>

        <div className='flex flex-row flex-wrap w-[90%] justify-center items-center gap-4'>
       {item.map((items:any,index:number)=>{
        return <OurFeature data={items} key={index}/>
       })}
        </div>
    </div>
  )
}

export default OurFeatures