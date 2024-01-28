import React from 'react'
import img from '../assets/stock-vector-vote-icon-comic-style-ballot-box-cartoon-vector-illustration-white.jpeg'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
export default function Dashnav() {
     
  function logout(){
    localStorage.removeItem("userToken")
    alert("Logged out Sucessfully")
  }
  return (
    <div className=' flex flex-col justify-between'>
     
    <div className=' flex flex-col bg-gray-800 py-5  h-fit text-xl text-gray-400 w-[32vh] shadow-2xl'>
        <div className=' flex flex-row items-center mb-5 pl-4 border-b pb-2 border-gray-400'>
        <img src={img} className=' w-10 h-10 rounded-full mr-2'/>
    <p className=' font-serif font-bold hover:text-white'>Onclick</p>
    </div>
        <div className=' flex flex-col'>
            <div className='pb-28'>
            <p className=' pt-4 pb-4 hover:bg-blue-950 hover:text-white pl-[10vh]'><Link to={'/dashboard'}>Dashboard</Link></p>
            <p className=' pb-4 pt-4  hover:bg-blue-950 hover:text-white pl-[10vh]'><Link to={'/Ballot'}> Ballot</Link></p>
            <p className=' pb-4 pt-4 hover:bg-blue-950 hover:text-white pl-[10vh]'><Link to={'/voiting'}> Voting</Link></p>
            <p className=' pb-4 pt-4  hover:bg-blue-950 hover:text-white pl-[10vh] '><Link to={'/setting'}> Settings</Link></p>
            </div>
            <div className=' flex flex-col items-center pr-8'>
            <p className=' pb-6 hover:text-white'>Edit profile</p>
            <button onClick={logout} className=' hover:text-white'><Link to={'/Login'}>Sign out</Link></button>
            </div>
        </div>
    </div>

    </div>
  )
}
