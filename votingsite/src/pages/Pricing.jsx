import React from 'react'
import Pricingc from '../components/Pricingc'
import img1 from '../assets/price.jpg'
export default function Pricing() {
  return (
    <div className=' bg-white'>
      <div className=' flex flex-row justify-between m-20'>
        <div className=''>
      <img src={img1} className=' pt-20'/>
      </div>
      <div className=' flex items-center'>
        <div className=' flex flex-col gap-10'>
        <p className=' font-bold text-4xl text-center'> Get Best deals at Best Price </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/>
         Molestias delectus voluptate nostrum vero beatae quibusdam <br></br>labore alias ea, impedit aspernatur perferendis, aut possimus quam facilis<br></br> aperiam, quos eveniet magnam sapiente!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, ad cumque, neque <br></br>blanditiis incidunt eveniet ducimus magnam adipisci exercitationem quia quos numquam dolore animi dolorum beatae! Libero nam dolor nihil!
        </p>
        <button className=' bg-orange-400 p-4 rounded-md'>Start Exploring</button>
        </div></div>
        </div>
      <p className=' flex justify-center text-4xl font-serif font-semi-bold underline text-gray-500'>Choose What Suits You</p>
      <div className=' flex flex-col mx-32 py-16 gap-12'>
      <div className=' flex flex-row justify-between'>
      <Pricingc title={'Starters'}
      body={'Trial pack organize upto 5 Elections'}
      cost={'0$'}
      />
      <Pricingc title={'Beginers'}
      body={'Absolute Beginer Pack 20 Elections'}
      cost={'10$'}/>
      <Pricingc title={'Plus'}
      body={'Plus Pack,Organize upto 50 Elections'}
      cost={'30$'}/>
      </div>
      <div className=' flex flex-row justify-between'>
      <Pricingc title={'Plus++'}
      body={'Customized Ballot & 100 elections'}
      cost={'50$'}/>
      <Pricingc title={'Montly'}
      body={'Get unlimited Election For a month'}
      cost={'100$'}/>
      <Pricingc title={'Annual'}
      body={'Unlimited Acess to all the feautures'}
      cost={'200$'}/>
      </div>
      <p className=' mt-10 text-4xl flex justify-center font-semibold'>Still Confused?? Explore Better Here</p>
      <p className=' font-extrabold font-serif text-4xl flex justify-center'>Our Best Deals</p>     
      <div className=' flex flex-row justify-between bg-green-200 p-20 gap-10'>
        <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus quam, voluptatibus, porro temporibus delectus recusandae in magni pariatur incidunt architecto numquam eum reiciendis error maiores modi impedit est a aliquam?</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit reiciendis consequuntur, deserunt vitae cum ab similique fuga soluta maiores enim deleniti a distinctio ipsa necessitatibus sequi mollitia unde. Ex, labore.</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam minus quibusdam laborum quae voluptates aspernatur amet ad ea. Modi odio facere voluptatem! Exercitationem voluptatum quidem natus deleniti vel reprehenderit asperiores?</div>
      </div>
      </div>
    </div>
  )
}
