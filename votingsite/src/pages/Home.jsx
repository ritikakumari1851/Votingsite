
import React from 'react';
import Slider from '../components/Slider';
import Card from '../components/Card';
import img1 from '../assets/Good team-pana.png'
import img2 from '../assets/young-women-advertising-vote-online-election-white-background-vector.jpg'
export default function Home() {
  return (
    <div className='flex flex-col items-center mt-8'>
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
      <div className='flex flex-wrap gap-3 mt-12 border-t justify-between px-44'>
        <div className='w-full sm:w-1/3 md:w-1/5'>
        
          <Card title={'Voting'}  />
         
        </div>
        <div className='w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={'Voting Ad'} />
        </div>
        <div className=' w-full sm:w-1/3 md:w-1/5 p-2'>
          <Card title={"voting"} />
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
      <div className='flex flex-col md:flex-row justify-between h-screen w-full border bg-gray-500 md:p-10'>
      <div className=' flex flex-col'>
        <div className=' text-4xl text-black p-5'>  Election Excellence </div>
        <div className='text-white md:w-full mb-4 md:mb-0'>
      
ElectionBuddy is easy for voters to cast ballots,
 with the convenience of voting from their home, by mail or on-site.
          <br />
          <br />
          
          </div>
          </div>
        <div className=' flex flex-col'>
        
        <div className=' text-4xl text-black md:w-full p-5'> Marvelous Meetings</div>
        <div className='text-white md:w-full'>
       
ElectionBuddy easily runs all your votes for in-person meetings, videoconferences and hybrid meetings too.
          <br />
          <br />
          </div>
        </div>
      
      </div>
      <p className='text-4xl mt-10 text-center'>
        Take Your Vote To the Next Level with Us
      </p>
      <div className='flex flex-col md:flex-row justify-between h-80 w-full border bg-white md:p-10'>
      <div className=' flex flex-col'>
        <div className=' text-4xl text-black  p-5'> Boost Engagement </div>
        <div className=' text-gray-500 md:w-full  '> 
        Notify voters using email, mail, text message or<br/> with your own systems.
         Receive undeliverable notice alerts and send reminders. Voters vote by phone, computer, mail or in person.
          <br />
          <br />
          <br/>
          </div>
          </div>

          <div className=' flex flex-col'>
        <div className=' text-4xl text-black md:w-full p-5'>  High-integrity Voting </div>
        <div className=' text-gray-500 md:w-full  '>
      
        Voters can only vote once and voting choices remain anonymous. Each ballot has one, secure voting key and the vote is auditable, verifiable and can be independently observed.
          <br />
          <br />
          
          </div>
          </div>
        <div className=' flex flex-col'>
        
        <div className=' text-4xl text-black md:w-full p-5'> Flexible Ballots</div>
        <div className=' text-gray-500 md:w-full'>
       
        Vote on executive officers, board positions, contract ratifications, bylaw amendments, budget approvals, acclamations and motions. Or run polls and surveys.
          <br />
          <br />
          </div>
          </div>
      
      </div>
      <div className='flex flex-col md:flex-row justify-between h-80 w-full border bg-white md:p-10'>
      <div className=' flex flex-col'>
        <div className=' text-4xl text-black  p-5'> Automated and Simple </div>
        <div className=' text-gray-500 md:w-full  '> 
        Setup your Election or Meeting Votes in 3 steps - spend ur time monitoring, not counting. Or engage our experts for dedicated assistance or independent election oversight.
          <br />
          <br />
          <br/>
          </div>
          </div>

          <div className=' flex flex-col'>
        <div className=' text-4xl text-black md:w-full p-5'>  Real-time Results </div>
        <div className=' text-gray-500 md:w-full  '>
      
        
Winners are immediately calculated using first past the post, cumulative voting, preferential ballot, STV Single transferable vote or approval voting. You can tabulate results yourself too!

          <br />
          <br />
          
          </div>
          </div>
        <div className=' flex flex-col'>
        
        <div className=' text-4xl text-black md:w-full p-5'> 
        Secure and Private</div>
        <div className=' text-gray-500 md:w-full'>
       
256-bit encryption used to safeguard your vote — the same security as major banks. And we don’t share or use voter data — your elections stay private.
          <br />
          <br />
          </div>
        </div>
      </div>
     
     </div>
  

 
  );
}

       