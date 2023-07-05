'use client'
import React from 'react'
import Link from 'next/link'
import TechnicalHeroImage from "../../../assets/img/images/SVG/technicalhero.svg";
import banner1 from '../../../assets/img/banner/banner1.png';
import Image from 'next/image';
import Wave from '../../Wave';

const TechnicalHero = (props:any) => {
    let {title,desc,btn,link,img} = props.items.item;
    
    return (
        <div className="wavesheader bg-gradient-to-l from-[#7F07EB] to-[#7F07EB] h-full flex">
            <div className="inner-header wavesflex py-[50px] px-3 md:px-0 mx-auto" style={{height:"100%"}}>
                {/* Content start */}
                <div className="container w-full flex items-center justify-center m-auto flex-wrap h-[100%]">
                    <div className="container md:px-20 md:flex md:items-center md:justify-between md:h-[100%] items-center" style={{height:"80%"}}>
                        <div className="md:w-full md:h-[100%]">
                            <div className="mb-6 md:mt-10">
                                <h2 style={{lineHeight:"40px"}} className={`md:text-[36px] text-white font-sans space-y-4 dark:text-white mb-4 font-bold font-heading text-[28px] md:mr-0 md:w-[80%] ${title.length > 3 && title.length < 10?"text-orange-500":"text-red-600"}`}>
                                    {title ? title:"default title"}
                                    {/* <span>Your <span className='text-red-600 font-bold'>Fin</span>ance <br/>and
                                        <span className='text-red-600 font-bold'> Tech</span>nology partner For <br/> your next projects.</span> */}
                                    <br />
                                    {/* <span className="text-kushLight-primary inline-block">Your Ideas</span> */}
                                </h2>
                                <p className="text-[13px] md:text-[16px] text-blueGray-400 dark:text-white text-white" style={{fontStyle:"normal",lineHeight:"24px",fontWeight:"400",textIndent:"0px"}}>
                                 {desc}
                                </p>
                            </div>
                            <div className="flex justify-center w-full md:justify-start">
                                <Link
                                    className="outline-none py-2 px-6 text-center font-normal py-3 text-md capitalize rounded shadow-lg text-white bg-[#FC7703] hover:bg-indigo-600 w-full md:w-auto cursor-pointer"
                                    href={link}
                                >
                                    {btn}
                                </Link>
                                

                            </div>
                        </div>

                        <div className="md:mt-0 flex md:w-[100%] rounded-md justify-center">
                            <Image src={img} alt="loading..." className='object-contain w-full h-[300px] py-3 md:py-0'/>
                            {/* <Image src={TechnicalHeroImage} alt="loading..." className='w-full object-cover h-full'/> */}
                            {/* <iframe src="https://embed.lottiefiles.com/animation/25992" width={"100%"} height={"20%"}></iframe> */}
                        </div>

                        
                    </div>

                </div>
            
                {/* Content end */}
            </div>

        </div>
    )
}

export default TechnicalHero