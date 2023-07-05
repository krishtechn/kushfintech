import React from 'react'
import Img from '../../assets/img/logo/spinimg.png';
import Image from 'next/image';
// interface data{
//   id:BigInteger,
//   title:string,
//   subtitle:string,
// }

const WorkingProcessItem = (props:any) => {
  let {id,title,subtitle} = props.items;
  return (
    <div className="flex justify-center rounded-md flex-col flex-wrap gap-2 my-6 items-center transform w-full px-2 py-5 bg-white md:mx-5">
    {/* <div className="rounded-full shadow-xl animate-none h-24 w-24 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 opacity-30 flex items-center justify-center"> */}
      <Image src={Img} alt='loading image...' className='px-5 relative hover:scale-110 transition-all ease-in-out duration-500 scale-90'/>
      <h1 className='font-[600] text-white text-2xl top-0 mt-[59px] mr-[1.3rem] absolute'>{id}</h1>
    {/* </div> */}
    <div className='mt-2 flex flex-col justify-center'>
    <h1 className='font-inherit text-[1.125rem]'>{title}</h1>
   <p className='text-center mt-[0.7rem] text-[13px]'>{subtitle}</p>
    </div>
    </div>
  )
}

export default WorkingProcessItem