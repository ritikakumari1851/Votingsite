import React from 'react'
import img from '../assets/stock-vector-vote-icon-comic-style-ballot-box-cartoon-vector-illustration-white.jpeg'
export default function Dashnav() {
  return (
    <div className=' flex flex-col bg-blue-900 py-5  h-full text-xl text-gray-400 w-[40vh]'>
        <div className=' flex flex-row items-center mb-5 pl-4 border-b pb-4'>
        <img src={img} className=' w-14 h-14 rounded-full mr-2'/>
    <p className=' font-serif font-bold'>Onclick</p>
    </div>
        <div className=' flex flex-col'>
            <div className=' pb-28'>
            <p className=' pt-5 hover:bg-blue-950 pl-[10vh]'>Dashboard</p>
            <p className=' pb-10  hover:bg-blue-950 pl-[10vh]'>settings</p>
            <p className=' pb-10  hover:bg-blue-950 pl-[10vh]'>Pricing</p>
            <p className=' pb-5 pt-5  hover:bg-blue-950 pl-[10vh] '>Contact</p>
            </div>
            <div>
            <p className=' pb-10'>Edit profile</p>
            <p className=''>Sign out</p>
            </div>
        </div>
    </div>
  )
}
