import React from 'react'
import Link from 'next/link'

const Ourwork = () => {
  return (
    <div className='bg-gradient-to-r from-[#660BEC] to-[#660BEC] w-full py-[70px] px-5 relative mb-[100px] rounded'>
        <div className='md:ml-[100px]'>
            <h1 className='text-white font-semibold mb-4 text-sm'>Helping you grow and nurture your ideas</h1>
            <h1 className='text-white font-bold text-3xl my-4'>Our Work,<br/> Your Satisfaction</h1>
         <p className='text-white font-bold mb-4 text-sm'>Have an idea? Connect with us and make
an impactful journey.</p>
<Link href='/contact' className='border py-2 px-5 shadow-lg text-white rounded-full mt-3'>Contact us now</Link>
        </div>

        <div className='md:w-[60%] ml-[7%] md:ml-[17%] mt-7 bg-white absolute shadow-xl rounded flex md:flex-row justify-between items-center py-5 px-10 w-[80%] flex-col z-0'>
        <div className='text-center md:border md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-[3.90px] border-indigo-600 w-full mb-4'>
        <h1 className='text-black font-semibold text-xl md:text-2xl mb-2'>10+</h1>
        <p className='capitalize text-xs md:text-sm font-semibold'>Clients</p>
        </div>

        <div className='text-center md:border md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-[3.90px] border-indigo-600 w-full mb-4'>
        <h1 className='text-black font-semibold text-xl md:text-2xl mb-2'>12+</h1>
        <p className='capitalize text-xs md:text-sm font-semibold'>Projects</p>
        </div>

        <div className='text-center md:border md:border-l-0 md:border-t-0 md:border-b-0 md:border-r-[3.90px] border-indigo-600 w-full mb-4'>
        <h1 className='text-black font-semibold text-xl md:text-2xl mb-2'>20+</h1>
        <p className='capitalize text-xs md:text-sm font-semibold'>Teams</p>
        </div>

        <div className='text-center w-full mb-4'>
        <h1 className='text-black font-semibold text-xl md:text-2xl mb-2'>15+</h1>
        <p className='capitalize text-xs md:text-sm font-semibold'>services</p>
        </div>
        </div>
    </div>
  )
}

export default Ourwork