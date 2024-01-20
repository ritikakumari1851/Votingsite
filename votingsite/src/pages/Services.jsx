import React from 'react'
import img1 from '../assets/service.jpg'
import img3 from '../assets/done-for-you@2x.jpg'
import img2 from '../assets/pngtree-election-day-political-hand-drawn-cartoon-flat-illustration-with-voters-casting-ballots-at-polling-place-in-united-states-suitable-for-poster-or-campaign-picture-image_876245.png'
import Card from '../components/Card'
import Slider from '../components/Slider'
export default function Services() {
  return (
    <div>
      
       <div className=' flex flex-row justify-between mt-32 ml-10 text-gray-900 '>
       <div >
        <h1 className=' text-8xl font-tempo font-extrabold'>From support to setup to full Service</h1>
        <p className=' text-gray-600 text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, labore dolor sunt suscipit soluta officia corrupti nesciunt<br></br> voluptate maiores, nam eum hic qui in? Maiores corrupti nobis accusamus hic placeat?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, veniam? Maiores reiciendis ut at architecto, dolor voluptates <br>
          </br>nostrum vel veritatis id dolorum aperiam quo eius? Porro repellat illum nemo voluptate?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores eveniet itaque assumenda vel dolorum libero beatae, voluptatum ipsa dignissimos id, earum laudantium corporis, porro omnis. Reiciendis nulla qui id quasi?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, quisquam officiis doloribus ducimus cumque laborum, a odit odio, accusamus modi delectus. Cum sed porro, obcaecati accusantium dolores totam eaque dicta.
        </p>
        <button className='cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-gray-600 hover:text-white border-2 border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-gray-900 duration-300  focus:bg-transparent mt-10'>Explore Our Services</button>
      </div>
        <div>
      <img src={img1} className=''/>
      </div>
      </div>
      <div className=' bg-black flex flex-row w-full h-[60vh] mt-10'>
        <img src={img2}></img>
      </div>
      <div className=' flex flex-row m-20 items-center'>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolor velit unde tenetur corporis laborum voluptatem maiores perspiciatis quos possimus culpa quasi suscipit accusantium ad, voluptate vero ducimus dolore molestias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum sint incidunt ut perferendis consequuntur est a, porro voluptatum deserunt praesentium repudiandae dicta quas provident ea doloremque minima nam delectus necessitatibus!
          </p>
          <button className=' bg-black p-5 text-white rounded-md mt-10'>
            Explore more
          </button>
        </div>
        <div>
        <div className=' flex flex-row'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        <div className=' flex flex-row'>
          <Card/>
          <Card/>
          <Card/>
        </div>
        </div>
      </div>
      <div className='flex items-center'>
        <Slider className=''/>
        </div>
        <div className=' flex flex-row justify-between gap-6 m-10'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim iure sed tempora quod eligendi. Ipsa voluptatum aut temporibus amet et magni, nobis distinctio incidunt, similique dolorem ut minus quidem? Repellat!
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, minima assumenda nihil nostrum exercitationem eveniet, error vitae dicta impedit accusamus ducimus incidunt, suscipit temporibus commodi cupiditate vel officiis illum dolore?</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quasi dolorem similique. Nemo animi dicta dignissimos autem dolore voluptatem aperiam accusamus a, quam rem suscipit veniam? Dolorum sint corrupti sit!</p>
        </div>
        <div className=' bg-[#002538] flex flex-col items-center'>
          <div className=' text-white p-20'>
            <p className=' text-6xl font-bold'>Not Sure How to Use these Services?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quam ducimus expedita libero maiores? Voluptas, magnam dolores velit, minima voluptatibus sunt eligendi ullam fuga expedita quaerat alias magni molestiae eos?
            </p>
          </div>
          <div className=' flex justify-center'>
          <img src={img3} className=' w-1/2'/>
          </div>
          <button className=' bg-orange-400 p-5 text-white rounded-md mb-10 font-serif border border-slate-600 hover:bg-slate-900 hover:text-white'>Get Decumentation</button>
        </div>
    </div>
  )
}
