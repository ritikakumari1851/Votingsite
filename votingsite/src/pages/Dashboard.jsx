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
import img6 from "../assets/Good team-pana.png";
import img7 from "../assets/03c5e1f41a08f714c252b6763457b843f8b8bc31-731x731.png";
import img8 from "../assets/decision.png";
import img9 from "../assets/elections-concept-group-people-voting-putting-ballot-papers-ballot-box-democracy_687327-377.avif";
import img10 from "../assets/Hand-drawn-election-day-voting-holding-card-illustration-voting-hands_132917_wh1200.png";
import img11 from "../assets/feature_college.webp";
import img12 from "../assets/GoVote.png";
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

        <div className=" mt-1">
          <div className=" flex flex-row gap-2">
            <button className=" px-10 py-2 mb-16 bg-cyan-200 ml-1 ">
              <img src={img2} className=" size-1/2 ml-14" />
              <Link to={"/Candidatelist"}>Candidates</Link>
            </button>

            <Link to={"/Ballotbox"}>
              <button className=" px-20 py-16 mb-16 bg-orange-300">
                {" "}
                <img src={img3} />
                Ballot{""}
              </button>
            </Link>
            <Link to={"/Voterlist"}>
              <button className=" px-20 py-16 mb-16 bg-green-200">
                {" "}
                <img src={img4} />
                Voters{""}
              </button>
            </Link>
            <Link to={"/Result"}>
              <button className=" px-20 py-16 mb-10 bg-gray-300">
                {" "}
                <img src={img5} />
                Results{""}
              </button>
            </Link>
          </div>
          <div className="">
            <p className=" text-center font-serif text-4xl text-gray-900 mb-12 mt-[-20px]">
            Choose The Type of Election to Organise
            </p>
          </div>
          <div className="bg-white w-4/5 h-1/2 rounded-xl mt-10 relative">
        <div className="flex">
          <div className="relative w-1/2">
            <img src={img6} className="w-full" alt="Image 1" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Insititues
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img7} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              NGO
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img8} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              School
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-1/2">
            <img src={img9} className="w-full" alt="Image 3" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Colleges
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img10} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Companies
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img11} className="w-full" alt="Image 4" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Studios
            </button>
          </div>
        </div>
      </div>

        </div>
      </div>
    </div>
  );
}
