import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Election from './pages/Election'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { MyFooter } from './components/Footer'
import { logEvent } from 'firebase/analytics';
import { analytics } from './utils'
import Contact from './pages/Contact'
import Reset from './pages/Reset'
import { useEffect, useState } from 'react'
import Dashboard from './pages/Dashboard'
import Chatroom from './pages/Chatroom'


function App() {
  if(analytics){
    logEvent(analytics, 'visited..')
  }
  const [loggedIn,setisLoggedin]=useState(false)
  useEffect(()=>{
  const token =localStorage.getItem("userToken")
  if(token){
    setisLoggedin(true)
  }
  },[])
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/election' element={<Election/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    <Route path='/reset' element={<Reset/>}/>
    <Route path='/chat' element={<Chatroom/>}/>
    { loggedIn && <Route path='/dashboard' element={<Dashboard/>}/>}
    </Routes>
   <MyFooter/>
    </>
  )
}

export default App
