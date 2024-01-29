import React from 'react'
import Dropdown from '../components/Dropdown'
import Dashnav from '../components/Dashnav'
import img1 from "../assets/vote.png";
import Card1 from '../components/Card1';
export default function Dashboard() {
  return (
    <div className=''>
       <div>
        
          <div className=' bg-white flex flex-row justify-between'>
           <img src={img1} className=' h-14 w-18 ml-5 shadow-2xl'/>
   <div className=''><Dropdown/>
   </div>
    </div>
    </div>
    
    <div className=' flex'>
    <div className=''>
      <Dashnav/>
      
      </div>
     
      <div className=''>
        <p className=' mb-4 bg-gray-200 p-2'>Dashboard</p>
        <div className=' flex flex-row gap-2'>
      <button className=' px-28 py-16 bg-cyan-900 ml-2'>  hello</button>
      <button  className=' px-28 py-16 bg-orange-300'>  hello</button>
      <button  className=' px-28 py-16 bg-green-400'>  hello</button>
      <button  className=' px-28 py-16 bg-gray-600'>  hello</button>
      </div>
      <p className=' text-center font-serif text-4xl mt-10'>
        Our most recent Candidate
      </p>
      <div className=' flex flex-row justify-between mt-10 mx-20'>
      <Card1/>
      <Card1/>
      <Card1/>
    </div>
    </div>
    </div>
    </div>

  )
}
