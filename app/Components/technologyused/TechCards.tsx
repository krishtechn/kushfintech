import React from 'react'
import TechCard from './TechCard'

const TechCards = (props:any) => {
  return (
    // <div className='flex md:w-[60%] gap-3 my-9 flex-wrap justify-center items-center'>
        <TechCard d={props.item}/>
    // </div>
  )
}

export default TechCards