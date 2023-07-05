'use client'
import React, { useState } from 'react'
import FinancialCard from './FinancialCard'


const FinancialCards = (props:any) => {
  return (
    <div className='flex flex-col justify-center items-center w-[100%] pt-5 pb-5 px-2 mx-auto'>
        <h3 className='font-bold text-2xl text-blue-700 md:text-4xl text-center mx-5'>
          {props.title ? props.title:"Our Core Technological Service"}
          </h3>
        <p className='text-center mx-6'>We provide best services to enhance your financial works.</p>
        <div className='flex flex-wrap mt-4 w-[100%] mx-auto justify-center items-center mx-auto'>
            <FinancialCard item={props.item}/>
        </div>
    </div>
  )
}

export default FinancialCards