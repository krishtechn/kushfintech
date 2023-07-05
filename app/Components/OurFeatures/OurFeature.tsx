import React from 'react'
import Image from 'next/image'
import logoimg from '../../assets/img/logo/logo.png';
import Link from 'next/link';

const OurFeature = (props:any) => {
    let {id,title,desc,link,img} = props.data;
    // alert(id);
  return (
    <div className='w-[350px] mx-3 justify-center items-center flex flex-col my-[80px] text-center hover:hover:scale-110 transition-all'>
        <Image src={img} alt="image loading..." className={`animateimg relative w-[500px] h-[300px] ${id==1 || id == 3?"rotate-90":"rotate-0"}`}/>
        <Link href={link} className='absolute w-[330px] p-10'>
        <Image loading='lazy' src={logoimg} alt="image loading..." className='w-[70px] h-[50px] mx-auto mb-6'/>
        <h1 className="font-bold text-lg flex-wrap text-center text-[#111827] mb-2">{title}</h1>
        <p className='font-normal mb-2 px-9 text-gray-600'>{desc}</p>
        </Link>
    
        
    </div>
  )
}

export default OurFeature