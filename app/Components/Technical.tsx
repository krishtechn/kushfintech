'use client'
import React from 'react'
import TechnicalHero from './technical/components/TechnicalHero'
import CallToAction from './technical/components/callToAction'
import Wave from './Wave'


const Technical = (props:any) => {
  return (
    <div className='flex w-full flex-col'>
        <TechnicalHero items= {props}/>
        {/* <Wave /> */}
        {/* <CallToAction /> */}
    </div>
  )
}

export default Technical