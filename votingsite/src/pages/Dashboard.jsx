import React from 'react'
import Dropdown from '../components/Dropdown'
import Dashnav from '../components/Dashnav'
import img1 from "../assets/vote.png";
import Card1 from '../components/Card1';
export default function Dashboard() {
  return (
    
    <div className=''>
       <div>
          <div className=' bg-gray-600 flex flex-row justify-between items-center '>
          <p className=' text-white ml-4'>Dashboard</p>
   <div className=''><Dropdown/>
   </div>
    </div>
    </div>
    
    <div className=' flex'>
    <div className=''>
      <Dashnav/>
      
      </div>
     
      <div className=' mt-2'>
        
        <div className=' flex flex-row gap-2'>
      <button className=' px-28 py-16 bg-cyan-900 ml-2'>  hello</button>
      <button  className=' px-28 py-16 bg-orange-300'>  hello</button>
      <button  className=' px-28 py-16 bg-green-400'>  hello</button>
      <button  className=' px-28 py-16 bg-gray-600'>  hello</button>
      </div>
      <p className=' text-center text-black font-serif text-4xl mt-10'>
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
