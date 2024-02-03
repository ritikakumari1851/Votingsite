import React from 'react'
import Dashnav from '../components/Dashnav'
import img from '../assets/logo.jpg'
export default function Voiting() {
  return (
    <div>
      <div className=''>
        <div>
        <p className='p-4 bg-gray-200 text-xl font-serif shadow-2xl'>Voting</p>
        </div>
        <div className=' flex items-center gap-4'>
        <div>
    <Dashnav/>
    </div>
   
      
      <div className=''>
      <p>No. of Candidates</p>
      <button className=' px-28 py-8 bg-cyan-900'>  hello</button>
      <p>No. of Voters</p>
      <button  className=' px-28 py-8 bg-orange-300'>  hello</button>
      <p>Analyse Result</p>
      <button  className=' px-28 py-8 bg-green-400'>  hello</button>
      <p>Edit voters</p>
      <button  className=' px-28 py-8 bg-gray-600'>  hello</button>
      </div>
      <div className=' flex flex-col'>
      <img src={img} className=' ml-20 size-2/3'/>
      <p className=' text-4xl font-serif ml-32 text-orange-400'>Voting Begins here!</p>
      <p className=' text-2xl text-black font-sans ml-40 mt-10'>Grab Your Ballot Now</p>
      </div>
    </div>
   
    </div>
    </div>
  )
}
