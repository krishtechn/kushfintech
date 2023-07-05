import React from 'react'
import WorkingProcessItems from './WorkingProcessItem';

const WorkingProcess = () => {
    let items = [
        {
            id:1,
            title:"Understand Requirements",
            subtitle:"Ideas are worthless"
        },
        {
            id:2,
            title:"Research & Analysis",
            subtitle:"Ideas are worthless"
        },
        {
            id:3,
            title:"Research & Analysis",
            subtitle:"Build Solutions"
        }
    ]
  return (
        <div className='flex flex-col flex-wrap py-[50px] px-9 justify-center items-center w-[100%] mx-auto'>
                <h1 className='font-bold text-blue-700 text-3xl'>Working Process</h1>
                <p className='text-[0.75rem] dark:text-white mt-2'>We use agile methodology</p>
             <div className='mt-3 flex justify-center items-center md:w-[80%] flex-wrap md:flex-nowrap'>
                {items.map((items,index)=>{
                    return <WorkingProcessItems key={index} items={items}/>
                })}
             </div>
    </div>
  )
}

export default WorkingProcess