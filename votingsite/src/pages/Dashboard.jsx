import React from "react";
import Dropdown from "../components/Dropdown";
import Dashnav from "../components/Dashnav";
import img1 from "../assets/vote.png";
import Card1 from "../components/Card1";
import img2 from "../assets/checklist.png";
import img3 from "../assets/cv (2).png";
import img4 from "../assets/politics.png";
import img5 from "../assets/voter.png";
import { Link } from "react-router-dom";
import img6 from "../assets/1.png";
import img7 from "../assets/2.png";
import img8 from "../assets/3.png";
import img9 from "../assets/4.png";
export default function Dashboard() {
  return (
    <div className="">
      <div className=" border-b">
        <div className=" bg-gray-800 flex flex-row justify-between items-center ">
          <p className=" text-gray-300 font-serif text-lg font-semibold ml-4">
            Dashboard
          </p>
          <div className=" ">
            <Dropdown />
          </div>
        </div>
      </div>

      <div className=" flex">
        <div className="">
          <Dashnav />
        </div>
        <div>
          <div className=" w-fit h-[40vh] flex justify-between gap-[10vh] mx-10 shadow-xl mt-10 pb-10 ">
            <div className=" mt-10 border-r-2 p-4 bg-red-300 ml-10 rounded-full">
              <Link to={"/Candidatelist"}>
                <div className="">
                  <p className=" text-center ml-5 mr-5 font-serif font-semibold pt-14">
                    View
                  </p>
                  <p className=" text-center ml-10 mr-8 font-serif text-sm">
                    Candidates
                  </p>
                  <img src={img4} className=" h-[12vh] w-[12vh] ml-10 mr-10 " />
                </div>
              </Link>
            </div>
           
            <div className=" mt-10 border-r-2 pr-12 bg-green-300 p-16 rounded-full">
              
            <Link to={"/Candidatelist"}>
              <p className=" text-center font-serif font-semibold">View</p>
              <p className=" text-center font-serif text-sm">Elections</p>
              <img src={img5} className=" h-[12vh] w-[12vh]" />
            
              </Link>
              </div>
            
            
            <div className=" mt-10 border-r-2 p-14 bg-violet-400 rounded-full ">
            <Link to={"/Candidatelist"}><p className=" text-center mt-5 font-serif font-semibold">View</p>
              <p className=" text-center font-serif text-sm">Voters</p>
              <img src={img3} className=" h-[12vh] w-[12vh]" />
              </Link> </div>
           
           
            <div className=" mt-10 border-r-2 bg-blue-400 p-6 mr-10 rounded-full">
            <Link to={"/Candidatelist"}><p className=" text-center mt-5 font-serif font-semibold pt-8">
                View
              </p>
              <p className=" text-center font-serif text-sm">Votes</p>
              <img src={img2} className=" h-[12vh] w-[12vh] mr-10 ml-8" />
            </Link></div>
         
          </div>

          <div className="  mt-20 w-fit h-[30vh] flex justify-between gap-[30vh] ml-[20vh] mx-10 shadow-xl ">
            <div>
              <img src={img6} className=" h-[10vh] w-[10vh] ml-10" />
              <p className=" text-center ml-5 mt-5 font-serif font-semibold">
                200+
              </p>
              <p className=" text-center ml-10 font-serif text-sm">
                Candidates
              </p>
            </div>
            <div>
              <img src={img7} className=" h-[10vh] w-[10vh]" />
              <p className=" text-center ml-5 mt-5 font-serif font-semibold">
                100+
              </p>
              <p className=" text-center font-serif text-sm">Elections</p>
            </div>
            <div>
              <img src={img8} className=" h-[10vh] w-[10vh]" />
              <p className=" text-center mt-5 font-serif font-semibold">600+</p>
              <p className=" text-center font-serif text-sm">Voters</p>
            </div>
            <div>
              <img src={img9} className=" h-[10vh] w-[10vh] mr-10" />
              <p className=" text-center mt-5 font-serif font-semibold">300+</p>
              <p className=" text-center font-serif text-sm">Votes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
