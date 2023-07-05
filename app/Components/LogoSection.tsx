'use client'
import React from 'react'
import Image from 'next/image';
import Logo1 from '../assets/img/logo/eduvibe_logo.png';
import Logo2 from '../assets/img/logo/itf_logo.png';
import Logo3 from '../assets/img/logo/logik_logo.png';
import Logo4 from '../assets/img/logo/logo.png';
import Logo5 from '../assets/img/logo/logo1.png';


const LogoSection = () => {
    let logosectiondata = [
        {
            id:1,
            image:Logo1,
        },
        {
            id:2,
            image:Logo2,
        },
        {
            id:3,
            image:Logo3,
        },
        {
            id:4,
            image:Logo4,
        },
        {
            id:5,
            image:Logo5,
        }
    ]
    
  return (
    <div className='flex flex-wrap justify-center items-center bg-[#FEF1E5] w-full py-3 mt-10 px-5 my-5 shadow'>
        {
            logosectiondata.map((items,index)=>{
                return <Image key={index} src={items.image} alt='image loading...' className='h-[100px] py-4 object-contain animate-pulse cursor-pointer mx-[30px] hover:scale-110 transition-all hover:shadow-full w-[70px] '/>;
            })
        }
        </div>
  )
}

export default LogoSection