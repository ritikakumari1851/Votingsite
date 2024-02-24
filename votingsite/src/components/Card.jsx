import React from "react";

export default function Card({ title, img }) {
  return (
    <>
      <div className=" cardn relative backdrop-blur flex shadow-slate-700 shadow-lg rounded-xl ml-10 mb-2 w-[30vh] mt-32">
        <p className="cardn-hover:hidden absolute flex ">{title}</p>
        <img className="absolute" src={img} alt="" />
      </div>
    </>
  );
}
