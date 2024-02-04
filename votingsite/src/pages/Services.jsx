import React from "react";
import img1 from "../assets/service.jpg";
import img3 from "../assets/done-for-you@2x.jpg";
import img2 from "../assets/pngtree-election-day-political-hand-drawn-cartoon-flat-illustration-with-voters-casting-ballots-at-polling-place-in-united-states-suitable-for-poster-or-campaign-picture-image_876245.png";
import Card from "../components/Card";
import Slider from "../components/Slider";
export default function Services() {
  return (
    <div>
      <div className=" flex flex-row justify-between pt-32 ">
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10">
        <div className="md:w-full px-4 md:px-10 ">
        <p className="text-7xl   mb-5 font-sans font-medium text-orange-600 ">
           From Support TO
          </p>
          <p className="text-4xl mb-5 font-serif font-extrabold text-gray-900">
            Setup To 
          </p>
          <p className="text-7xl mb-5 font-sans font-medium text-orange-600">
           Full Service
          </p>
          <p className=" text-gray-600 text-lg p-5 font-serif ">
            Not every organization can run their election or <br />
            meeting votes themselves due to their own bylaws
            <br /> or external statutes. That’s why we offer
            <br /> consultation, expert setup and voter management
            <br /> services so you and your voters are confident in
            <br /> the voting results. Learn how ElectionBuddy can
            <br /> meet your needs.
          </p>
          <button className="cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-gray-600 hover:text-white border-2 border-gray-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-gray-900 duration-300  focus:bg-transparent mt-10">
            Explore Our Services
          </button>
        </div>
        </div>
        <div className="md:w-full mt-6 md:mt-0">
          <img src={img1} className="w-full md:float-right" alt="Good Team" />
        </div>
      </div>
      <hr className=" mt-20 h-1" />
      <div className=" flex flex-row m-20 items-center">
        <div className=" text-black">
          <h1 className=" text-5xl  font-extrabold p-5">
            Run-It-Yourself, With Our Help Setup Consultation
          </h1>
          <p >
            You'd like to do most of the setup, but you want to be sure it's
            perfect. An ElectionBuddy Expert meets with you online to discuss
            your needs, answers questions, provides guidance and reviews your
            setup to ensure your election or meeting runs great. Add "on-call"
            email support for the duration of your vote for extra peace of mind.
          </p>
          <button className=" bg-black p-5 text-white rounded-md mt-10">
            Explore more
          </button>
        </div>
        <div>
          <div className=" flex flex-row">
            <Card />
            <Card />
            <Card />
          </div>
          <div className=" flex flex-row">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Slider className="" />
      </div>
      <div className=" flex flex-row justify-between gap-6 m-10">
        <div className=" flex flex-col">
          <div className=" text-2xl font-serif font-bold p-2 mt-5 text-white bg-orange-600 ">
            {" "}
            Voting Setup
          </div>
          <p className=" p-5 text-black font-medium">
            Your Election Expert will complete setup to ensure your vote meets
            your needs. We will set up voting settings, custom ballots and
            schedule notice! And if you need compliance with bylaws, statutes,
            or legislation, we’ll work with your legal council too!
          </p>
        </div>
        <div className=" flex flex-col">
          <div className=" text-2xl font-serif font-bold p-2 mt-5 text-white bg-orange-600 ">
            Dedicated Assistance
          </div>
          <p className=" p-5 text-black font-medium">
            Your Election Expert is with you from requirements to results.
            You'll meet online to review needs and test. During voting, help is
            a phone call away for questions about voter management or inquiries.
            Or for meetings, your expert assists using video, or runs the votes.
          </p>
        </div>
        <div className=" flex flex-col">
          <div className=" text-2xl font-serif font-bold p-2 mt-5 text-white bg-orange-600">
            Results Communication
          </div>
          <p className=" p-5 text-black font-medium">
            Your Election Expert guides you in delivering observable and
            accurate results quickly, along with tips on sharing results with
            your voters. And if your vote requires custom tallying or third
            party attestation or other reporting assistance, just ask!!
          </p>
        </div>
      </div>
      <div className=" bg-[#002538] flex flex-col items-center">
        <div className=" text-white p-20">
          <p className=" text-6xl font-bold">
            Not Sure How to Use these Services?
          </p>
          <p className=" p-7 font-medium">
            Whether you just need a little help, or you want us to take care of
            your election or meeting, let’s chat about what works for you.
          </p>
        </div>
        <div className=" flex justify-center">
          <img src={img3} className=" w-1/2" />
        </div>
        <button className=" bg-orange-400 p-5 text-white rounded-md mb-10 font-serif border border-slate-600 hover:bg-slate-900 hover:text-white">
          Get Decumentation
        </button>
      </div>
    </div>
  );
}
