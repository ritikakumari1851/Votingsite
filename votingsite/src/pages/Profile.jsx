import React from 'react'
import Dashnav from '../components/Dashnav'
import UserProfileCard from '../components/Avtar'
import Editform from '../components/Editform'

export default function Profile() {
  return (
    <div className=' flex justify-between'>
    <div>
      <Dashnav/>
    </div>
    <div>
        <Editform/>
    </div>
    <div className=' m-10'>
        <UserProfileCard/>
    </div>
    </div>
  )
}
