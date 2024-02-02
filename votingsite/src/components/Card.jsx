import React from 'react'

export default function Card({title,img}) {
  return (
    <>
    <div className=' cardn relative backdrop-blur flex shadow-slate-700 shadow-lg rounded-xl m-10'>
       <p className='cardn-hover:hidden absolute flex '>{title}</p> 
        <img className='absolute' src={img} alt="" />
        
    </div>
    </>
  )
}
