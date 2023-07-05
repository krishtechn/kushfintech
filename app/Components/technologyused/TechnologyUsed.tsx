import React, { useState } from 'react'
import TechCards from './TechCards'
import technologiesUsed from '../../backend/TechnologiesUsed';

const TechnologyUsed = () => {
    let [data,setdata] = useState(technologiesUsed);

    let filterdata = (category:any)=>{
        let filteritems = data.filter((items:any,index:number)=>{
            return items.categoryName == category;
        })
        return setdata(filteritems);
    }

  return (
    <div className='flex mt-3 justify-center items-center w-full flex-col mb-[80px]'>
        <h1 className='font-bold text-blue-700 text-2xl text-center w-[90%]'>Technologies we expertise with</h1>
        <p className='text-center w-[90%]'>We use robust technologies to provide you scalable services</p>
        <div className='flex my-4'>
            {/* {data.map((items,index)=>{ */}
                 <button  className="outline-none py-2 px-8 font-bold py-3 text-md capitalize transition-opacity duration-250 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text" onClick={()=>filterdata("Financial")}>Finance</button>
                 <button  className="outline-none py-2 px-8 font-bold py-3 text-md capitalize transition-opacity duration-250 hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-transparent hover:bg-clip-text" onClick={()=>filterdata("Technical")}>Technical</button>
            {/* })} */}
        </div>

        <div className='w-[80%] flex items-center flex-wrap mx-auto justify-center'>
        {data[0].subCategories.length && data[0].subCategories.map((items:any,index:number)=>{
          return <>
        {/* <TechCards item={items.items}/> */}
          <button key={index} className="outline-none py-2 px-8 font-bold py-3 text-md capitalize text-gray-600" onClick={()=>filterdata(items.subCategoryName)}>{items.subCategoryName}</button>
          </>
        })}    
            
        </div>  

          <div className='w-[80%] flex items-center flex-wrap mx-auto justify-center'>
        {data[0].subCategories.length && data[0].subCategories.map((items:any,index:number)=>{
          return <>
        <TechCards item={items.items} key={index}/>
          </>
        })}    
            
        </div>           

        
    </div>
  )
}

export default TechnologyUsed