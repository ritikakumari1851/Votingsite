import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <div className=' flex flex-row justify-evenly font-serif'>
        <div className=''>
        <img  className=' w-screen mt-8' src="..\src\assets\elections-concept-group-people-voting-putting-ballot-papers-ballot-box-democracy_687327-377.avif" alt="" />
        </div>
        <div className=' w-dvw '>
          <div className=' border m-16 p-6 rounded-lg shadow-2xl '>
            <img src='..\src\assets\vote.png' alt='' className=' size-40 ml-36 -mt-6'/>
            <p className=' text-center font-serif text-2xl mb-4 -mt-6 text-gray-400'>
               <i>Welcome User</i>
            </p>
            <div className=' flex flex-col '>
          <input type='Email' placeholder='Email' className=' border-b p-2 mt-6'></input>
          
          <input type='Password' className=' mt-10 rounded p-2 border-b mb-6' placeholder='Password'></input>
         
          </div>
         <div className=' flex flex-row gap-2 ml-2 text-gray-400'> <input type='checkbox' className=''></input><p>Remember me</p></div>
          <button type='submit' className='text-gray-300 w-full bg-green-900 p-3 mt-6 rounded-lg hover:bg-green-950'>Submit</button>
          <div className='  text-center mt-6'>
          <p>
            Trouble logging in? <u className=' text-blue-900'> Forgot password</u>
          </p>
          <p>
            Don't have Account? <Link to='/registration'><u className=' text-blue-900'> Sign up</u></Link>
          </p>
          </div>
      </div>
        </div>
      </div>
      </div>
  )
}
