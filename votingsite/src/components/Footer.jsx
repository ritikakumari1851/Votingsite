'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
// import Button from './Button';
import {useLocation} from "react-router-dom"
import img1 from '../assets/vote.png'
export function MyFooter() {
  const location =useLocation();
  if (location.pathname === '/Login' || location.pathname === '/voiting' || location.pathname === '/registration' || location.pathname === '/Ballot' || location.pathname === '/Reset' || location.pathname === '/Contact' || location.pathname === '/forgotpas' || location.pathname === '/dashboard' ) {
   return null;
  } 
  
  return (
    <Footer container className='rounded-none shadow-2xl'>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          <div>
            <Footer.Brand
              href="/"
              src={img1}
              alt=" Logo"
              className=' size-32'
            />
          </div>
         
          <div>
            <Footer.Title title="Follow us" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Github</Footer.Link>
              <Footer.Link href="#">Discord</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="about" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className=' text-blue-900 font-semibold underline'>Voting Online</Footer.Link>
              <Footer.Link href="#" className=' text-blue-900 font-semibold underline'>Ballot Design</Footer.Link>
              <Footer.Link href="#" className=' text-blue-900 font-semibold underline'>Election</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <hr className='mt-2 mb-2'/>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <Footer.Copyright href="#" by="Voteonclick" year={2022} />
          <div className="mt-4 flex space-x-6 md:mt-0 md:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
          <a href='/Registration'>
        <button  className=' mt-4 bg-blue-800 font-serif p-3 rounded-md text-gray-200 hover:bg-blue-950 '>Register Now</button></a>
        </div>
      </div>
    </Footer>
  );
}
