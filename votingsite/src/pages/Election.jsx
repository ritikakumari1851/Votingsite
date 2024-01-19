import React from 'react'
import Card from '../components/Card'

export default function Election() {
  return (
    <div>
      <div className=' text-7xl flex flex-row justify-between '>

      <h1 className=' mt-[30vh] ml-[10vh] font-bold'>
        <p className=' text-4xl mb-6 text-orange-700 font-thin'>Choose Professional &</p>CHOOSE YOUR ACTION<br></br><p className=' text-4xl font-serif text-orange-700 mt-10 font-thin'>Let Your voice be heard </p></h1>
      <img className=' w-[90vh]' src='..\src\assets\At the office-pana.png'></img>
      </div>
      <div className=' flex flex-row gap-5 justify-between'>
      <button className=' ml-32 animate-bounce-slow  bg-gray-800 w-40 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-2xl font-semibold shadow-gray-900 shadow-2xl'>Voter</button>
      <button className=' bg-gray-800 animate-bounce-slow w-52 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-xl font-semibold shadow-gray-900 shadow-2xl '>Administrator</button>
      <button className=' mr-32  animate-bounce-slow bg-gray-800 w-40 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-xl font-semibold shadow-gray-900 shadow-2xl'>Results</button>
      </div>
      <div className=' flex flex-row justify-between ml-20 mr-20'>
        <Card/>
        <Card/>
        <Card/>
      </div>
      <hr className=' m-[10vh]'/>
      <div>
        <p className=' text-5xl flex justify-center font-semibold'>We Provide Two method for Election</p>
        <div className=' flex justify-between h-screen w-full border bg-gray-400 mt-[5vh]'>
       <div className=' text-white border mr-10 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores repellat molestiae, placeat molestias, dolore quisquam id exercitationem iusto earum ut ipsam eum est soluta facilis
        <br></br>. Ex earum nobis iure.
        <button className=' bg-black'>Create Ballot</button></div>
        <div className=' text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores repellat molestiae, placeat molestias, dolore quisquam id exercitationem iusto earum ut ipsam eum est soluta facilis
        <br></br>. Ex earum nobis iure. 
        <button className=' bg-black'>Setup</button>
        </div>
      </div>
      <p className=' text-5xl flex justify-center mb-10 font-serif font-extrabold text-gray-500'>
        Who can Use it?
      </p>
      <div className=' flex justify-between mb-10 mr-10 ml-10'>
        <img  className='w-[30vh] h-[30vh]' src='..\src\assets\pngtree-election-day-political-hand-drawn-cartoon-flat-illustration-with-voters-casting-ballots-at-polling-place-in-united-states-suitable-for-poster-or-campaign-picture-image_876245.png'/>
        <img  className='w-[30vh] h-[30vh] 'src='..\src\assets\65239a541f5870e14459a587_64900e7335d6666c4a954f20_decision.png'/>
        <img  className='w-[30vh] h-[30vh]'src='..\src\assets\istockphoto-1267110917-612x612.jpg'/>
        <img  className='w-[30vh] h-[30vh]'src='..\src\assets\vector-illustration-people-vote-online-for-candidate-on-phone-election-campaign-online-choices-political-competition-presidential-election-concept-of-2DFC2T4.jpg'/>
      </div>
      <div className=' flex flex-col justify-center items-center shadow-2xl'>
      <div className=' flex flex-row  gap-4'>
    <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
    <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
    </div>
    <div className=' flex flex-row  gap-4 mt-4'>
    <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
    <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
    </div> 
      <div className=' flex flex-row mt-4 gap-4' >
      <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
      <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
      </div><div className=' flex flex-row  gap-4 mt-4' >
      <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
      <button className=' bg-gray-500 w-[50vh] h-14 rounded-md'></button>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo nesciunt quae voluptas excepturi numquam, odit magnam perferendis sint est hic, perspiciatis amet repudiandae, voluptate corrupti maiores! Repellendus nulla distinctio cum?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, deleniti suscipit! Illo dolorum perspiciatis eaque dolorem iure tempora id. Excepturi velit quod aut quas similique culpa sed quos ipsum consectetur!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nemo doloremque voluptatum neque ducimus ullam ut repellendus voluptas est, esse earum labore autem iste et officia reprehenderit praesentium. Cumque, repellendus.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At tenetur est officiis, veniam, impedit voluptatibus nobis quaerat, dolorem perspiciatis exercitationem doloribus consequuntur quod? Quae odit quia nobis, quidem eum id.
        
      </p>
     </div>
    </div>
    </div>
  )
}
