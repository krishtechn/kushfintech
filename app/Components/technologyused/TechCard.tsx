import React from 'react'
import Image from 'next/image'

const TechCard = (props:any) => {
  
  return (
    <>
    {props.d.map((items:any,index:number)=>{
      return <div className='w-full md:w-[200px] shadow-xl py-4 px-4 mx-5 my-4 flex flex-col flex-wrap justify-center items-center'>
      <img className='w-[100px] mb-7' alt='Image Loading...' src={items.icon}/>
      <h1 className='text-[15px] font-bold text-indigo-600 text-center'>{items.name}</h1>
  </div>
     })}
    </>
  )
}

export default TechCard