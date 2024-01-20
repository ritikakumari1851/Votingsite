
import React from 'react';
import Slider from '../components/Slider';
import Card from '../components/Card';
import img1 from '../assets/Good team-pana.png'
export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col md:flex-row items-center mt-10 md:mt-20'>
        <div className='md:w-full px-4 md:px-10'>
          <p className='text-2xl mb-5 font-sans font-medium text-orange-600'>
            Anonymous Voting & Customized Ballot
          </p>
          <p className='text-6xl mb-5 font-serif font-extrabold'>
            Secure and Easy Access Elections
          </p>
          <p className='text-lg text-gray-400'>
            Vote onclick guarantees election integrity, boosts voter engagement,
            and saves serious hours. It's free to test and free for up to 20
            voters. Easy and practical for all & Documentation is also available
            to know how to use.
          </p>
          <div className='flex flex-col md:flex-row md:items-center gap-4 mt-10'>
            <button className='animate-bounce-slow bg-gray-900 p-4 pl-8 pr-8 font-serif text-xl text-white rounded-md'>
              Start Now
            </button>
            <p className='mt-2 md:mt-0 font-sans font-semibold text-blue-900 text-lg'>
              <u>Explore Services</u>
            </p>
          </div>
        </div>
        <div className='md:w-full mt-6 md:mt-0'>
          <img
            src={img1}
            className='w-full md:float-right'
            alt='Good Team'
          />
        </div>
      </div>
      <div className='max-h-[30vh] w-full mt-6 rounded-xl'>
        <Slider />
      </div>
      <div className='mt-12 text-4xl font-bold text-center border-t'>
        <p className='pt-8'>Types of Elections You Can Organize</p>
        <p className='text-orange-600 text-3xl mt-4 font-medium'>
          Cast Your Vote To.
        </p>
      </div>
      <p className='text-center mt-6 text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui commodi
        quo, officiis explicabo nobis laboriosam repellat animi adipisci unde
        distinctio, tempora sed magnam magni perspiciatis minima numquam atque
        quasi maxime?
      </p>
      <div className='flex flex-wrap gap-3 mt-12 border-t justify-between'>
        <div className='w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={'Voting'} image={''} />
        </div>
        <div className='w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={'Voting Ad'} />
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting"}/>
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting"}/>
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting ad"}/>
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting"}/>
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting ad"}/>
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting"}/>
        </div>
 
    
      </div>
      <div className='flex flex-col md:flex-row justify-between h-screen w-full border bg-black p-4 md:p-10'>
        <div className='text-white md:w-full mb-4 md:mb-0'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores
          repellat molestiae, placeat molestias, dolore quisquam id
          exercitationem iusto earum ut ipsam eum est soluta facilis
          <br />
          <br />
          Ex earum nobis iure.
        </div>
        <div className='text-white md:w-full'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, dolores
          repellat molestiae, placeat molestias, dolore quisquam id
          exercitationem iusto earum ut ipsam eum est soluta facilis
          <br />
          <br />
          Ex earum nobis iure.
        </div>
      </div>
      <p className='text-4xl mt-10 text-center'>
        Take Your Vote To the Next Level with Us
      </p>
    </div>
  );
}

       