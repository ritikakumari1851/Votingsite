import './App.css'
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Election from './pages/Election'
import Login from './pages/Login'
import Registration from './pages/Registration'
import { MyFooter } from './components/Footer'

import { logEvent } from 'firebase/analytics';
import { analytics } from './utils'

function App() {
  if(analytics){
    logEvent(analytics, 'visited..')
  }
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/election' element={<Election/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/registration' element={<Registration/>}/>
    </Routes>
   <MyFooter/>
    </>
  )
}

export default App
