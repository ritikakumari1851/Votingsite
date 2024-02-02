import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashnav from '../components/Dashnav';
import img1 from "../assets/hand-holding-ballot-paper-voting-600nw-2367185457.webp";
import img2 from "../assets/hand-voting-ballot-box-icon-260nw-2277558977.webp";
import img3 from "../assets/AdobeStock_385320928-Converted.png";
import Ballotbox from './Ballotbox';

export default function Ballot() {
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    // Add logic here for handling the next button click
    alert('You may Enter the Details now!');
    navigate('/ballotbox');
  }

  return (
    <div className='  '>
      <div>
        <p className='p-4 bg-gray-200 text-xl font-serif shadow-2xl '> Ballot</p>
      </div>
      <div className=' flex'>
        <div>
          <Dashnav />
        </div>
        <div className=''>
          <img src={img3} className=' w-full h-40 mb-3' />
          {showInput && (
            <div className='flex flex-col mt-[10vh]'>
              <input type='text' placeholder='Enter no. of candiate to register' className='px-4 py-2 mb-2 border border-gray-500 rounded-md' />
              <button className='py-2 bg-blue-900 px-4 rounded-md text-white font-serif text-xl' onClick={handleNext}>Next</button>
            </div>
          )}
          {!showInput && (
            <div className='flex flex-row gap-2'>
              <button className='px-28 py-16 bg-cyan-900 ml-2'>  hello</button>
              <button className='px-28 py-16 bg-orange-300'>  hello</button>
              <button className='px-28 py-16 bg-green-400'>  hello</button>
              <button className='px-28 py-16 bg-gray-600'>  hello</button>
            </div>
          )}
          <div className='flex mt-[10vh] justify-between'>
            <img src={img1} className='size-32' />
            {!showInput && (
              <button className='py-8 bg-blue-900 px-36 rounded-md flex text-black font-serif text-2xl items-center' onClick={() => setShowInput(true)}>Create new Ballot</button>
            )}
            <img src={img2} className='size-32' />
          </div>
        </div>
      </div>
    </div>
  )
}
