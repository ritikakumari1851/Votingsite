import React from 'react'
import Slider from '../components/Slider'
import Card from '../components/Card'
export default function Home() {
  return (
    <div className=' flex justify-center flex-col items-center' >
      <div className=' flex flex-row items-center mt-20'>
      <div className=' pl-10'>
      <p className=' text-2xl mb-5 font-sans font-medium text-orange-600'>Annoynmous Voting & Customized Ballot</p>
          <p className=' text-6xl mb-5 font-serif font-extrabold'>Secure and Easy access Elections</p>
          <p className=' text-lg text-gray-400'>Vote onclick guarantees election integrity, boosts voter engagement and saves serious hours. It's free to test and free for up to 20 voters. Easy and practical for all & Documentation is also available to know how to use.
          </p>
          <div className=' flex flex-row items-center gap-28'>
          <button className=' animate-bounce-slow bg-gray-900 p-4 pl-8 pr-8 font-serif text-xl text-white rounded-md mt-10'> Start Now</button>
          <p className=' mt-[5vh] font-sans font-semibold text-blue-900 text-lg'><u>Explore Services</u></p>
          </div></div>
       
        <div>
        <img src='..\src\assets\Good team-pana.png' className=' float-right w-5/6'/>
        </div>
       
      </div>
      <div className=' max-h-[30vh] w-[100%] mt-6 rounded-xl'>
     
     <Slider/>
     </div>
     <div className=' mt-24 text-4xl font-bold text-center border-t'>
     <p className=' pt-10'>Types of Elections You Can organize </p>
     <p className=' text-orange-600 text-3xl mt-4 font-medium'>& Cast Your vote to.</p>
     </div>
     <p className=' text-center mt-10 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi quo, officiis explicabo nobis laboriosam repellat animi adipisci unde distinctio,<br></br> tempora sed magnam magni perspiciatis minima numquam atque quasi maxime?</p>
      <div className=' flex flex-row gap-3 mt-20 border-t'>
     
        <Card title={" voting"} image={''}/>
        <Card title={" voting ad"}/>
        <Card title={" voting"}/>
        <Card title={" voting"}/>
        </div>
        <div className=' flex flex-row'>
        <Card title={" voting ad"}/>
        <Card title={" voting"}/>
        <Card title={" voting ad"}/>
        <Card title={" voting"}/>
      </div>
      <div className=' flex justify-between h-screen w-full border bg-black'>
       <div className=' text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores repellat molestiae, placeat molestias, dolore quisquam id exercitationem iusto earum ut ipsam eum est soluta facilis
        <br></br>. Ex earum nobis iure.</div>
        <div className=' text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores repellat molestiae, placeat molestias, dolore quisquam id exercitationem iusto earum ut ipsam eum est soluta facilis
        <br></br>. Ex earum nobis iure.</div>
      </div>
      <p className=' text-4xl'>
      Take Your vote To next Level with us
      </p>
      
    </div>
  )
}
