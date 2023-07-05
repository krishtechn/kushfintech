'use client'
import React from 'react'
import Logo from '../../assets/img/logo/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineDialerSip } from 'react-icons/md';
import {BsFacebook,BsInstagram} from 'react-icons/bs';
import {AiFillLinkedin} from 'react-icons/ai';
import {Financialdata,techServices,companyfooter} from '../../backend/data';
import footerimg from '../../assets/img/footerimg.png';

const Footer = () => {
    return (
    <div className='mt-[100px]'>
    <Image src={footerimg} alt='loading img...' className='w-full h-[70px]'/>
    <div className='md:flex justify-between py-30 pt-1 px-8 w-[100%] mx-auto bg-[#F3F4F6] shadow md:mt-0 mt-[300px]' style={{borderTopLeftRadius:"20px"}}>
        <div className='md:w-[90%]'>
            <Image src={Logo} alt='Logo...' className='w-[150px]' loading='lazy'/>
            <p className='my-6 text-sm text-deep-purple-50'>KUSH Fintech Consultants was started a year ago with<br/> the motive of serving businesses in both finance<br/> and technology related services.</p>
            <div className='flex items-center'>
            <MdOutlineDialerSip className='text-gray-600'/>
            <a href="Tel: 123-456-7890" className='font-semibold text-gray-500'>+977 98188-21313</a>
            </div>
        </div>
        <div className='flex w-full justify-end md:flex-row flex-col mt-4 text-sm'>
        <ul className='flex flex-col mr-5'>
                <li className="font-bold text-lg flex-wrap text-[#111827] mb-5">Financial Services</li>
                {/* {Financialdata.map((items:any,index:number)=>{
                    return <Link key={index} className='font-normal hover:underline mb-2 hover:text-blue-600' href={items.link}>{items.title}</Link>;
                })} */}
                
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Business Consulting</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Startup Establishment</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Accounting</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Tax Consulting</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Accounting</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Legal Compliance</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Training & Development</Link>
            </ul>

            <ul className='flex flex-col mr-5'>
                <li className="font-bold text-lg flex-wrap text-[#111827] mb-5">Technical Services</li>
                {/* {techServices.map((items:any,index:number)=>{
                    return <Link key={index} className='font-normal hover:underline mb-2 hover:text-blue-600' href={items.link}>{items.title}</Link>;
                })} */}
                
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>web development</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Cloud Computing</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Data Analytics</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Digital Marketing</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Graphic Designing</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Video Editing</Link>
            </ul>

            <ul className='flex flex-col mr-5'>
                <li className="font-bold text-lg flex-wrap text-[#111827] mb-5">Company</li>
                {
                    companyfooter.map((items:any,index:number)=>{
                        return <Link key={index} className='font-normal hover:underline mb-2 hover:text-blue-600' href={items.link}>{items.title}</Link> 
                    })
                }
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>our Team</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Careers</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>FAQS</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Terms & Conditions</Link>
                <Link href='/' className='font-normal hover:underline mb-2 hover:text-blue-600'>Policies</Link>
                <Link href='/contact' className='font-normal hover:underline mb-2 hover:text-blue-600'>Contact</Link>
            </ul>
        </div>
    </div>

    <div className='flex w-full py-5 px-5 justify-between flex-wrap bg-[#F3F4F6]'>
        <div>
            <p className='text-sm text-gray-700'>© Copyright 2021 <Link href="https://www.kushfintech.com/" className='text-orange-500'>KUSH Fintech Pvt. Ltd.</Link></p>
            <p className='text-[12px]'>KUSH logo, brandmark, name are registered trademark of KUSH Fintech Pvt. Ltd.</p>
        </div>

        <div className='flex items-end mt-5 '>
            <Link href="https://www.facebook.com/KUSHFintech">
            <BsFacebook className='mx-4 cursor-pointer animate-pulse'/>
            </Link>
            <Link href="https://www.instagram.com">
            <BsInstagram className='mx-4 cursor-pointer animate-pulse'/>
            </Link>

            <Link href="https://www.linkedin.com">
            <AiFillLinkedin className='mx-4 cursor-pointer animate-pulse'/>
            </Link>
        </div>
    </div>
    </div>
  )
}

export default Footer