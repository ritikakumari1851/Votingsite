import React from 'react'
import img from '../assets/stock-vector-vote-icon-comic-style-ballot-box-cartoon-vector-illustration-white.jpeg'
import Dropdown from './Dropdown'
export default function Dashnav() {
  return (
    <div className=' flex flex-row justify-between'>
    <div className=' flex flex-col bg-blue-900 py-5  h-screen text-xl text-gray-400 w-[35vh] shadow-2xl'>
        <div className=' flex flex-row items-center mb-5 pl-4 border-b pb-4 border-gray-400'>
        <img src={img} className=' w-10 h-10 rounded-full mr-2'/>
    <p className=' font-serif font-bold hover:text-white'>Onclick</p>
    </div>
        <div className=' flex flex-col'>
            <div className='pb-28'>
            <p className=' pt-5 pb-5 hover:bg-blue-950 hover:text-white pl-[10vh]'>Dashboard</p>
            <p className=' pb-5 pt-5  hover:bg-blue-950 hover:text-white pl-[10vh]'>Settings</p>
            <p className=' pb-5 pt-5 hover:bg-blue-950 hover:text-white pl-[10vh]'>Pricing</p>
            <p className=' pb-5 pt-5  hover:bg-blue-950 hover:text-white pl-[10vh] '>Contact</p>
            </div>
            <div className=' flex flex-col items-center pr-8'>
            <p className=' pb-6 hover:text-white'>Edit profile</p>
            <p className=' hover:text-white'>Sign out</p>
            </div>
        </div>
    </div>
    <div className='mr-6'>
    <Dropdown/>
    </div>
    </div>
  )
}
