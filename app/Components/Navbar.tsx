'use client'
import React, { useState } from 'react'
import logoimg from '../assets/img/logo/logo.png';
import Image from 'next/image';
import NavLinks from './NavLinks';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaMoon} from 'react-icons/fa';
import {RxCross2} from 'react-icons/rx';


const Navbar = () => {
 let [toggle,settoggle] = useState("");

 let shownavbar = ()=>{
  toggle == ""?settoggle("navbar"):settoggle("");
 }


  return (
    <div className='flex px-3 items-center h-[70px] py-3 sticky top-0 left-0 right-0 shadow-lg bg-white z-10'>
       <Link href="/" className='hover:cursor-pointer max-[600px]:w-full w-full md:w-[100px]'>
       <Image src={logoimg} alt='Logo...' className='w-[100px] md:w-[70px]'/>
       </Link>
       
       {/* className={`md:flex md:items-center md:w-full hidden  shadow-2xl md:bg-indigo-700 justify-between`} */}
       <div className={`nav w-full md:justify-center flex md:items-center ${toggle}`}>
       <button className='md:ml-2 hover:cursor-pointer md:hidden w-full flex justify-end py-2 px-2' onClick={()=>settoggle("")}>
                <RxCross2 color='gray' className='hover:cursor-pointer text-white'/>
        </button>
       {/* <div className={`${toggle}`}> */}
       <NavLinks />
       <Link href='https://www.facebook.com/KUSHFintech' className="conbtn text-[0.75rem] border outline-none py-[10px] px-[20px] font-[550] py-[10px] text-md  text-[rgba(252,119,3)] border-[rgba(252,119,3)] rounded hover:text-indigo-600 hover:border-blue-700 font-[0.90rem] ml-[40px]">Connection with us</Link>
       {/* </div> */}
       </div>

       <div className='flex flex-row'>
              <button className='border p-[10px] shadow-lg md:ml-2 border-orange-500 md:hidden' onClick={()=>shownavbar()}>
                <GiHamburgerMenu color='gray'/>
              </button>
              <button className='p-[10px] px-[20px] md:ml-2 hover:cursor-pointer'>
                <FaMoon color='gray' className='hover:cursor-pointer'/>
              </button>
      </div>
    </div>
  )
}

export default Navbar