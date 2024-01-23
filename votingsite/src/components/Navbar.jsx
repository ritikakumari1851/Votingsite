import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import img from "../assets/stock-vector-vote-icon-comic-style-ballot-box-cartoon-vector-illustration-white.jpeg";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location =useLocation();
  if (location.pathname === '/Login' || location.pathname === '/registration' || location.pathname === '/Reset' ) {
   return null;
  } 
  return (
    <div>
      <nav className="bg-white shadow-xl fixed z-50 block top-0 overflow-hidden float-left w-[100%]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-14 w-14"
                  src={img}
                  alt=""
                />
              </div>
              <h1 className=" text-center font-display font-bold text-xl text-orange-800">
                OnClick
              </h1>
              <div className="hidden md:block">
                <div className=" ml-[50vh] flex items-baseline gap-4 ">
                <p
                 
                 className=" hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md border-r"
               >
               <Link to={'/'}>
              
               Home
                 </Link>
                </p>
                  
                 <p
                 
                    className=" hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md border-r"
                  >
                  <Link to={'Election'}>
                 
                    Election
                    </Link>
                   </p>
                   <p
                 
                 className=" hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md border-r"
               >
               <Link to={'chat'}>
              
                 chatRoom
                 </Link>
                </p>
                   
                   
                   

                 <p
                     
                    className="hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md border-r"
                  >
                    <Link to={'Services'}>
                    Services
                    </Link>
                   </p>

                 <p
                     
                    className="hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md border-r"
                  >
                    <Link to={'Contact'}>
                   Contact
                    </Link>
                   </p>

                 <p
                     
                    className="hover:border-b-2 hover:p-3 hover:border-b-blue-950 pr-4 text-gray-500 font-serif   text-md mr-[25vh]"
                  >
                    <Link to={'Pricing'}>
                    Pricing
                    </Link>
                   </p>
                   <Link to={'registration'}>
                  <button className=" bg-blue-950 text-white rounded-md p-4 pl-5 pr-5 font-serif">
                    Get started
                  </button>
                  </Link>
                  <Link to={'Login'}>
                  <p className=" font-serif text-blue-900 text-lg">
                    Sign in
                  </p>
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-slate-200" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <p
                   
                   className="hover:bg-gray-700 text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                 >
                   <Link to={'/'}>
               Home
                  </Link>
                  </p>
 
                 
                 <p
                   
                  className="hover:bg-gray-700 text-gray-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to={'Election'}>
                 Election
                 </Link>
                 </p>

                 <p
                   
                  className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to={'Services'}>
                 Services
                 </Link>
                 </p>

                 <p
                   
                  className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                ><Link to={'Pricing'}>
                  Pricing
                  </Link>
                 </p>

              

                 <p
                   
                  className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to={'Login'}>
                 Sign in
                 </Link>
                 </p>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
