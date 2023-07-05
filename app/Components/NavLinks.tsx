'use client'
import React from 'react'
import Link from 'next/link';
import {navlinks} from '../backend/data';

const NavLinks = () => {
  return (
    <>
        {navlinks.map((items,index)=>{
           return <Link key={items.id} href={items.link} className='links text-md mx-4 text-[0.875rem] dark:text-white text-inherit decoration-inherit font-normal hover:font-normal'>{items.name}</Link>
        })}
    </>
  )
}

export default NavLinks