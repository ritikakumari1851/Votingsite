import React from "react";
import Card from "../components/Card";
import Image from "../assets/At the office-pana.png";

export default function Election() {
  return (
    <div>
      <div className=" pt-10">
        <div className="text-7xl flex flex-col md:flex-row md:justify-between">
          <h1 className="mt-8 md:mt-[30vh] text-center md:text-left font-bold md:ml-[10vh]">
            <p className="text-4xl mb-6 text-orange-700 font-thin">
              Choose Professional &
            </p>
            CHOOSE YOUR ACTION
            <br />
            <p className="text-4xl font-serif text-orange-700 mt-10 font-thin">
              Let Your voice be heard
            </p>
          </h1>
          <img className="w-full md:w-[90vh]" src={Image} alt="Office" />
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          <button className="ml-0 md:ml-32 mt-4 md:mt-0 animate-bounce-slow bg-gray-800 w-full md:w-40 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-2xl font-semibold shadow-gray-900 shadow-2xl">
            Voter
          </button>
          <button className="mt-4 md:mt-0 bg-gray-800 animate-bounce-slow w-full md:w-52 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-xl font-semibold shadow-gray-900 shadow-2xl">
            Administrator
          </button>
          <button className="mt-4 md:mt-0 mr-0 md:mr-32 animate-bounce-slow bg-gray-800 w-full md:w-40 h-16 rounded-md hover:bg-gray-950 text-gray-200 text-xl font-semibold shadow-gray-900 shadow-2xl">
            Results
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-20">
          <Card />
          <Card />
          <Card />
        </div>
        <hr className="my-8 md:my-[10vh]" />

        <p className="text-5xl flex justify-center font-semibold">
          We Provide Two methods for Election
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between h-auto w-full border bg-black mt-4 md:mt-[5vh] py-10 ">
        <div className="text-white mx-4 md:mx-10 mt-4 md:mt-0">
          <div className=" text-4xl text-white font-bold p-10">
            {" "}
            Remote Voting with Absentee Ballots
          </div>

          <div className=" ml-4">
            Whether you're at home, in the office, or at a cafe, voters can vote
            anywhere and anytime using their own devices including their iPhone,
            Android device phone or mailed ballots. Along with this flexibility,
            voters can enjoy the peace of mind knowing that their vote is
            secure. We provide unique personal voting keys using the same
            security as most major banks!
          </div>
          <br />

          <button class="border text-gray-50 ml-4  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700" />

          <button class="border text-gray-50  duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700">
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p class="z-10 absolute bottom-2 left-2">Explore Remote Voting</p>
          </button>
        </div>
        <div className="text-white mx-4 md:mx-10 mt-4 md:mt-0 p-10">
          <div className=" text-4xl p-5 text-white font-bold ">
            {" "}
            In-person Voting at Polling Stations
          </div>
          With in-person voting, voters can cast their vote easily, securely and
          secretly at a voting booth by using their iPhone, Android device or
          tablet after receiving credentials. No device? No problem! Setup and
          personalize your voting kiosk with a computer, share tablets with
          voters, or provide paper ballots for those voters more comfortable
          with traditional processes.
          <br />
          <button class="border text-gray-50   duration-300 relative group cursor-pointer   overflow-hidden h-16 w-48 rounded-md bg-neutral-800 p-2 mt-10 font-extrabold hover:bg-sky-700">
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-700 right-12 top-12 bg-yellow-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-12 h-12 rounded-full group-hover:scale-150  duration-700 right-20 -top-6 bg-orange-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-8 h-8   rounded-full group-hover:scale-150  duration-700 right-32 top-6 bg-pink-500"></div>
            <div class="absolute group-hover:-top-1 group-hover:-right-2 z-10 w-4 h-4   rounded-full group-hover:scale-150  duration-700 right-2 top-12 bg-red-600"></div>
            <p class="z-10 absolute bottom-2 left-2">
              Explore In-Person Voting
            </p>
          </button>
        </div>
      </div>
      <p className="text-5xl flex justify-center mb-4 md:mb-10 font-serif font-extrabold text-gray-500">
        Who can Use it?
      </p>
      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-10">
        {/* Adjust image paths based on your project structure */}
        <img
          className="w-full md:w-[30vh] h-[30vh] mb-4 md:mb-0"
          src="..\src\assets\pngtree-election-day-political-hand-drawn-cartoon-flat-illustration-with-voters-casting-ballots-at-polling-place-in-united-states-suitable-for-poster-or-campaign-picture-image_876245.png"
          alt="Image1"
        />
        <img
          className="w-full md:w-[30vh] h-[30vh] mb-4 md:mb-0"
          src="..\src\assets\decision.png"
          alt="Image2"
        />
        <img
          className="w-full md:w-[30vh] h-[30vh] mb-4 md:mb-0"
          src="..\src\assets\istockphoto-1267110917-612x612.jpg"
          alt="Image3"
        />
        <img
          className="w-full md:w-[30vh] h-[30vh]"
          src="..\src\assets\vector-illustration-people-vote-online-for-candidate-on-phone-election-campaign-online-choices-political-competition-presidential-election-concept-of-2DFC2T4.jpg"
          alt="Image4"
        />
      </div>
      <div className="flex flex-col justify-center items-center shadow-2xl mt-4 md:mt-8">
        <div className="flex flex-col md:flex-row gap-4">
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Proffesional Assosiations
          </button>
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            k-12 school
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Union
          </button>
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Industry Assosiations
          </button>
        </div>
        <div className="flex flex-col md:flex-row mt-4 gap-4">
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Homeowner Assosiations
          </button>
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            College & Universities
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            NGO or Clubs
          </button>
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md  hover:text-2xlhover:translate-y-2 hover:text-white">
            Other Organizations
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Coopretives & Credit Union
          </button>
          <button className="bg-gray-500 w-full md:w-[50vh] h-14 rounded-md hover:text-2xl hover:translate-y-2 hover:text-white">
            Service Provider
          </button>
        </div>
      </div>
    </div>
  );
}
