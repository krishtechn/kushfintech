'use client'
import Link from 'next/link';
import React from 'react'

const FinancialCard = (props:any) => {
  return (
   <>
    {props.item.map((items:any,index:number)=>{
        let {image,title,description,link} = items;
         return  <Link href={link} key={index} className='w-[350px] my-9 mx-7 bg-white h-[95%] transition-all shadow-lg'>
          <div className='w-full h-full overflow-hidden'>
         <img src={image} alt='Image Loading...' loading='lazy' className='object-contains hover:scale-110 duration-700 ease-in-out rounded h-[35vh] md:h-[40vh]' style={{width:"100%"}}/>
          </div>
         <div className='py-4 px-4'>
         <h1 className='font-[700] text-[20px]'>{title}</h1>   
         <p className='mt-4 line-clamp-4 text-[14px] font-[400]  text-gray-500 line-clamp-1'>{description}</p>
         {/* <button className='bg-gradient-to-r animate-pulse from-indigo-400 to-indigo-700 shadow-lg py-2 px-4 rounded-full text-white mt-4'>Learn more</button> */}
         </div>
     </Link>
      })}
   </>
  )
}

export default FinancialCard