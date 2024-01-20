import React from 'react'

export default function Card({title,image}) {
  return (
    <>
    <div className=' backdrop-blur shadow-slate-700 shadow-lg rounded-xl p-20 m-10 w-20 h-20 '>
        {title}
        {image}
    </div>
    </>
  )
}
