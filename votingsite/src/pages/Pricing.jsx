import React from "react";
import Pricingc from "../components/Pricingc";
import img1 from "../assets/price.jpg";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className=" pt-10">
      <Link to={"/dashboard"}>
        <button class=" ml-2 overflow-hidden w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
          Go Back
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-white rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-left"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-left"></span>
          <span class="absolute w-36 h-32 -top-8 -left-2 bg-indigo-600 rotate-12 transform scale-x-0 group-hover:scale-x-50 transition-transform group-hover:duration-1000 duration-500 origin-left"></span>
          <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">
            DashBoard
          </span>
        </button>
      </Link>

      <div className="flex flex-col md:flex-row justify-between m-5 md:m-20">
        <div className="md:w-1/2">
          <img src={img1} className="w-full md:pt-20" alt="Price" />
        </div>
        <div className="flex items-center md:w-1/2">
          <div className="flex flex-col text-black gap-10 ml-10">
            <p className="font-bold  text-4xl text-center">
              Get Best deals at Best Price
            </p>
            <p className="text-center">
              Welcome to our voting website! Exciting news – basic voting
              services are free! For extra flair, we offer premium features at
              various prices. Customize your polls with unique themes and enjoy
              enhanced security measures . Need extensive data storage for a
              bustling election? No problem, scale up at $100/month. Gain access
              to real-time results for $100/month. Worried about user
              authentication? Our top-notch package at $100/month ensures secure
              voting. Plus, a user-friendly design upgrade is available for
              $50/month. Explore our range of options to make your voting
              experience tailored to your needs. Upgrade today for a seamless,
              secure, and personalized voting journey!
            </p>
            <button className="bg-orange-400 p-4 rounded-md">
              Start Exploring
            </button>
          </div>
        </div>
      </div>
      <p className="text-4xl text-center font-serif font-semi-bold underline text-gray-500">
        Choose What Suits You
      </p>
      <div className="flex flex-col md:flex-row mx-5 md:mx-32 py-8 md:py-16 gap-8 md:gap-12">
        <Pricingc
          title={"Starters"}
          body={"Trial pack organize upto 5 Elections"}
          cost={"0$"}
        />
        <Pricingc
          title={"Beginners"}
          body={"Absolute Beginner Pack 20 Elections"}
          cost={"10$"}
        />
        <Pricingc
          title={"Plus"}
          body={"Plus Pack, Organize upto 50 Elections"}
          cost={"30$"}
        />
      </div>
      <div className="flex flex-col md:flex-row mx-5 md:mx-32 py-8 md:py-16 gap-8 md:gap-12">
        <Pricingc
          title={"Plus++"}
          body={"Customized Ballot & 100 elections"}
          cost={"50$"}
        />
        <Pricingc
          title={"Monthly"}
          body={"Get unlimited Election For a month"}
          cost={"100$"}
        />
        <Pricingc
          title={"Annual"}
          body={"Unlimited Access to all the features"}
          cost={"200$"}
        />
      </div>
      <p className="mt-10 text-4xl  text-black text-center font-semibold">
        Still Confused?? Explore Better Here
      </p>
      <p className="font-extrabold text-black font-serif text-4xl text-center">
        Our Best Deals
      </p>
      <div className="flex flex-col md:flex-row mx-5 md:mx-32 bg-gray-200 p-8 md:p-20 gap-8 md:gap-10 mt-10 rounded-md">
        <div className=" text-4xl text-black ">
          Monthly Deal <br />
          <p className=" text-lg mt-5 ">
            We provide you monthly package at 100$. In this deal we give you
            ultimate elections for one month.
          </p>
          <Link to={"/registration"}>
            <p className=" text-xl h-10 w-40 rounded-full bg-black text-white hover:bg-white hover:text-black hover:translate-y-2 p-2 mt-10">
              {" "}
              Get Started{" "}
            </p>
          </Link>
        </div>
        <div className=" text-4xl text-black">
          Annual Deal <br />{" "}
          <p className=" text-lg mt-5 ">
            We provide you annualy package at 200$. In this deal we give you
            unlimited access to all the features for one year.
          </p>
          <Link to={"/registration"}>
            <p className=" text-xl h-10 w-40 rounded-full bg-black text-white hover:bg-white hover:text-black hover:translate-y-2 p-2 mt-10">
              {" "}
              Get Started{" "}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
