import React from 'react'
import { Link } from 'react-router-dom'

export default function Registration() {
  return (
    <div>
      <div className=' flex flex-row justify-evenly font-serif'>
        <div className=''>
        <img  className=' w-screen mt-8' src="..\src\assets\vector-illustration-people-vote-online-for-candidate-on-laptop-election-campaign-online-choices-political-competition-presidential-election-concept-of-2F266G1.jpg" alt="" />
        <img  className=' w-screen mt-8' src="..\src\assets\stock-vector-people-vote-polling-and-electoral-system-political-democracy-election-box-for-ballots-candidate-2363056905.jpg" alt="" />
        </div>
        <form className=' w-dvw '>
     
          <div className=' border m-16 p-6 rounded-lg shadow-2xl '>

            <img src='..\src\assets\vote.png' alt='' className=' size-40 ml-36 -mt-6'/>

            <p className=' text-center font-serif text-2xl mb-4 -mt-6 text-gray-400'>
               <i>Get Strated</i>
            </p>
            <div className=' flex flex-col '>
            <div className=' flex flex-row justify-between'>
            <input type='text' placeholder='First Name' className=' border-b p-2 mt-6'></input>
            <input type='text' placeholder='Last Name' className=' border-b p-2 mt-6'></input></div>
          <input type='Email' placeholder='Email' className=' border-b p-2 mt-6'></input>
          <input type='phone' placeholder='Phone no' className=' border-b p-2 mt-6'></input>
          <p className=' pt-4 text-right text-slate-500'> D.O.B</p>
          <input type='Date' placeholder='D.O.B' className=' border-2 p-2 mt-2 text-slate-700'></input>
          <input type='number' placeholder='Adhar-no' className=' border-b p-2 mt-6'></input>
          <input type='Password' className=' mt-8 rounded p-2 border-b mb-6' placeholder='Password'></input>
          <input type='Password' className='rounded p-2 border-b mb-6' placeholder='Conform password'></input>
          </div>
         <div className=' flex flex-row gap-2 ml-2 text-gray-600 font-serif text-sm'> <input type='checkbox' className=''></input><p><b>I agree to the Terms and conditions</b></p></div>
          <button type='submit' className='text-gray-300 w-full bg-green-900 p-3 mt-6 rounded-lg hover:bg-green-950'>Submit</button>
          <div className='  text-center mt-6'>
          <p>
            Alreadyh have a Account? <Link to='/registration'><u className=' text-blue-900'> Login </u></Link>
          </p>
          
          </div>
        
         
      
      </div>
      </form>
     
        </div>
   
    
      </div>
     
  )
}
