'use client'
import React, { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai'
import {techServices} from '../../backend/data';

export const metadata = {
  title: 'Kush Fintech - category',
  description: 'Generated by create next app',
}
let listitems :String[];
function Category({params}:any) {
let [data,setdata] = useState(techServices);

let filterdata = data.filter((items:any)=>{
    return items.category == params.category;
})

useEffect(()=>{
    setdata(filterdata);
},[data]);

let {id,title,description,image,link,category} = data[0];

if(category == "web-development"){
  listitems = [
    "To become a Web Developer, you should have an understanding of HTML, CSS, and JavaScript. It’s also recommended to learn about CSS and CSS frameworks. Developing these fundamental web development skills will give you the foundation and logic for communicating with programming languages.",
    "How to become a Web Developer in five steps",
    "web development",
    "  1. Learn web development fundamentals",
    "  2. Choose a development specialization",
    "  3. Learn key programming languages for web development",
    "  4. Work on projects to develop your Web Developer skills",
    "  5. Build a web development portfolio",
    "1. Learn Web Development Fundamentals",
    "The best first step to becoming a Web Developer is to start learning web development fundamentals, including an understanding of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.",
    "Many aspiring Web Developers are now using coding bootcamps to fast-track the learning process. Coding bootcamps have thrived because they are short, immersive, and focused on outcomes and employment – their goal is to develop job-ready skills as efficiently as possible, making them an increasingly worthwhile investment for a would-be Web Developer. According to the job site Indeed, four out of five companies in the U.S. have hired a graduate from a coding bootcamp.",
    "In fact, the practical advantages of coding bootcamps are only getting clearer over time. For one thing, the field of web development naturally attracts people from all other fields, many of them making mid-career transitions – people for whom a clear and efficient path to skills expansion is a top priority. Further, employers increasingly value skills and experience over education, placing anyone who can prove their abilities on more equal footing with Developers holding a college degree.",
    "It’s important to note that Web Developers – more than most other fields – must be committed to ongoing learning to stay on top of changes in web development and programming languages, tools, and trends. This makes mid-career retraining a must whether or not it’s the line of work you started out in."
  ]
}else if(category == "app-development"){
  listitems = [
    "To become a app Developer, you should have an understanding of HTML, CSS, and JavaScript. It’s also recommended to learn about CSS and CSS frameworks. Developing these fundamental web development skills will give you the foundation and logic for communicating with programming languages.",
    "How to become a app Developer in five steps",
    "app development",
    "  1. Learn app development fundamentals",
    "  2. Choose a development specialization",
    "  3. Learn key programming languages for app development",
    "  4. Work on projects to develop your app Developer skills",
    "  5. Build a app development portfolio",
    "1. Learn app Development Fundamentals",
    "The best first step to becoming a app Developer is to start learning app development fundamentals, including an understanding of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.",
    "Many aspiring app Developers are now using coding bootcamps to fast-track the learning process. Coding bootcamps have thrived because they are short, immersive, and focused on outcomes and employment – their goal is to develop job-ready skills as efficiently as possible, making them an increasingly worthwhile investment for a would-be Web Developer. According to the job site Indeed, four out of five companies in the U.S. have hired a graduate from a coding bootcamp.",
    "In fact, the practical advantages of coding bootcamps are only getting clearer over time. For one thing, the field of app development naturally attracts people from all other fields, many of them making mid-career transitions – people for whom a clear and efficient path to skills expansion is a top priority. Further, employers increasingly value skills and experience over education, placing anyone who can prove their abilities on more equal footing with Developers holding a college degree.",
    "It’s important to note that app Developers – more than most other fields – must be committed to ongoing learning to stay on top of changes in web development and programming languages, tools, and trends. This makes mid-career retraining a must whether or not it’s the line of work you started out in."
  ]
}else if(category == "cloud-computing"){
  listitems = [
    "To become a app Developer, you should have an understanding of HTML, CSS, and JavaScript. It’s also recommended to learn about CSS and CSS frameworks. Developing these fundamental web development skills will give you the foundation and logic for communicating with programming languages.",
    "How to become a app Developer in five steps",
    "app development",
    "  1. Learn app development fundamentals",
    "  2. Choose a development specialization",
    "  3. Learn key programming languages for app development",
    "  4. Work on projects to develop your app Developer skills",
    "  5. Build a app development portfolio",
    "1. Learn app Development Fundamentals",
    "The best first step to becoming a app Developer is to start learning app development fundamentals, including an understanding of HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript.",
    "Many aspiring app Developers are now using coding bootcamps to fast-track the learning process. Coding bootcamps have thrived because they are short, immersive, and focused on outcomes and employment – their goal is to develop job-ready skills as efficiently as possible, making them an increasingly worthwhile investment for a would-be Web Developer. According to the job site Indeed, four out of five companies in the U.S. have hired a graduate from a coding bootcamp.",
    "In fact, the practical advantages of coding bootcamps are only getting clearer over time. For one thing, the field of app development naturally attracts people from all other fields, many of them making mid-career transitions – people for whom a clear and efficient path to skills expansion is a top priority. Further, employers increasingly value skills and experience over education, placing anyone who can prove their abilities on more equal footing with Developers holding a college degree.",
    "It’s important to note that app Developers – more than most other fields – must be committed to ongoing learning to stay on top of changes in web development and programming languages, tools, and trends. This makes mid-career retraining a must whether or not it’s the line of work you started out in."
  ]
}

  return (
    <div>
      <div className='flex w-full justify-center items-center flex-col'>
<p className='bg-gradient-to-r mt-9 from-[#ff7170] to-[#ffe57f] text-transparent text-[18px] bg-clip-text font-bold mx-7 capitalize'>{params.category}</p>
        <h1 className=' text-black font-bold mt-9 capitalize leading-[60px] md:text-[45px] text-center mx-7 md:w-[900px] text-[35px]'>Complete Path to The {title}</h1>
        <p className='bg-gradient-to-r from-[#4ca5ff] text-xl to-[#b673f8] text-transparent bg-clip-text capitalize mt-3 mx-7 text-center'>Learn {params.category} Basic to Advance with Projects</p>
        
        {/* <p className='text-[21px] font-medium mx-1 capitalize text-[#A3B3BC] my-2 text-center md:w-[600px]'>{title}</p> */}
        <a href='#details' className='py-3 px-6 text-xl bg-gradient-to-r my-3 from-[#ff7170] rounded-full text-white font-bold to-[#ffe57f] mt-6 md:mt-10'>Learn Post</a>

        <div className='flex items-center my-7'>
        <div className='flex text-[#fbbf24]'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className='text-[17px] font-medium mx-1 capitalize text-[#A3B3BC]'>4.7/5, based on 97 reviews</p>
        </div>


<section id = "detailss">
        <div className='flex mx-auto flex-wrap'>
          <div className='mx-4 text-white my-[6px] md:w-[600px]'>
          <img src = {image} alt="loading..." className='object-contain w-full rounded-t-lg h-[300px]'/>    
          <h1 className='text-xl mt-6 mb-5 font-bold capitalize'><span className='bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] text-transparent bg-clip-text'>{title}</span></h1>
          <p className='bg-gradient-to-r from-[#4ca5ff] text-xl to-[#b673f8] text-transparent bg-clip-text'>{description}</p>
     <ul>
      <p className='text-black text-[14px] font-normal mb-9'>{listitems[0]}</p>
      <h1 className='text-[28px] mt-6 mb-5 font-bold capitalize'><span className='text-black'>{listitems[1]}</span></h1>
      <p className='text-indigo-600 text-[14px] font-normal mb-1 underline'>{listitems[3]}</p>
      <p className='text-indigo-600 text-[14px] font-normal mb-1 underline'>{listitems[4]}</p>
      <p className='text-indigo-600 text-[14px] font-normal mb-1 underline'>{listitems[5]}</p>
      <p className='text-indigo-600 text-[14px] font-normal mb-1 underline'>{listitems[6]}</p>
      <p className='text-indigo-600 text-[14px] font-normal mb-1 underline'>{listitems[7]}</p>

      <h1 className='text-[20px] my-10 font-bold'><span className='text-black'>{listitems[8]}</span></h1>
      <p className='text-gray-700 text-[16px] font-normal mb-7'>{listitems[9]}</p>
      <p className='text-gray-700 text-[16px] font-normal mb-7'>{listitems[10]}</p>
      <p className='text-gray-700 text-[16px] font-normal mb-7'>{listitems[11]}</p>
      <p className='text-gray-700 text-[16px] font-normal mb-7'>{listitems[12]}</p>
      <p className='text-gray-700 text-[16px] font-normal mb-7'>{listitems[13]}</p>

      </ul>

      </div> 
        </div>
        </section> 

   </div> 
    </div>
  )
}

export default Category