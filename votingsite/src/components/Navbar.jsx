import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const changeIndicator = (link) => {
    setActiveLink(link);
  };

  const navItemClass = (link) =>
    `hover:border-b-2 hover:border-blue-900 hover:border-r-0 hover:pb-1 hover:pr-0 pr-2 text-zinc-500 hover:text-xl hover:text-blue-900 ${
      activeLink === link ? 'border-b-2 border-blue-900 pb-2 pr-0 text-xl text-green-900' : ''
    }`;

  return (
    <nav className='border-b-1 flex flex-row justify-between p-1 font-serif shadow-lg pl-'>
      <div className='flex flex-row gap-2 items-center font-extrabold ml-4'>
        <img src='..\src\assets\vote-icon-png-12.jpg' className='w-10 h-10' alt='Logo' />
        <p className=' text-base text-black font-serif'>
         ON CLICK
        </p>
      </div>
      <div className='flex flex-row gap-4 items-center text-lg'>
        <Link to={'/'} onClick={() => changeIndicator('home')} className='border-r pr-2'>
          <p className={navItemClass('home')}>Home</p>
        </Link>
        <Link to={'/election'} onClick={() => changeIndicator('election')} className='border-r pr-2'>
          <p className={navItemClass('election')}>Election</p>
        </Link>
        <Link to={'/pricing'} onClick={() => changeIndicator('pricing')} className='border-r pr-2'>
          <p className={navItemClass('pricing')}>Pricing</p>
        </Link>
        <Link to={'/about'} onClick={() => changeIndicator('about')} className='border-r pr-2'>
          <p className={navItemClass('about')}>About</p>
        </Link>
        <Link to={'/services'} onClick={() => changeIndicator('services')}>
          <p className={navItemClass('services')}>Services</p>
        </Link>
      </div>
      <div className='flex flex-row gap-4 items-center pr-4'>
        <Link to={'/registration'}>
          <button className='hover:bg-lime-950 border border-slate-950 p-3 bg-lime-900 text-gray-100 rounded-lg pr-5 pl-5'>
            Get Started
          </button>
        </Link>
        <Link to={'/Login'} onClick={() => changeIndicator('sign in')}>
          <p className={navItemClass('sign in')}>Sign in</p>
        </Link>
      </div>
    </nav>
  );
}
