import React from "react";
import Pricingc from "../components/Pricingc";
import img1 from "../assets/price.jpg";

export default function Pricing() {
  return (
    <div className=" pt-10">
      <div className="flex flex-col md:flex-row justify-between m-5 md:m-20">
        <div className="md:w-1/2">
          <img src={img1} className="w-full md:pt-20" alt="Price" />
        </div>
        <div className="flex items-center md:w-1/2">
          <div className="flex flex-col gap-10 ml-10">
            <p className="font-bold text-4xl text-center">
              Get Best deals at Best Price
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              delectus voluptate nostrum vero beatae quibusdam labore alias ea,
              impedit aspernatur perferendis, aut possimus quam facilis aperiam,
              quos eveniet magnam sapiente!Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos, ad cumque, neque
              blanditiis incidunt eveniet ducimus magnam adipisci exercitationem
              quia quos numquam dolore animi dolorum beatae! Libero nam dolor
              nihil!
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
      <p className="mt-10 text-4xl text-center font-semibold">
        Still Confused?? Explore Better Here
      </p>
      <p className="font-extrabold font-serif text-4xl text-center">
        Our Best Deals
      </p>
      <div className="flex flex-col md:flex-row mx-5 md:mx-32 bg-gray-200 p-8 md:p-20 gap-8 md:gap-10 mt-10 rounded-md">
        <div className=" text-4xl text-black ">
          Monthly Deal <br />
          <p className=" text-lg mt-5 ">
            We provide you monthly package at 100$. In this deal we give you
            ultimate elections for one month.
          </p>
          <button className=" text-xl h-10 w-40 rounded-full bg-black text-white hover:bg-white hover:text-black hover:translate-y-2 p-2 mt-10">
            {" "}
            Get Started
          </button>
        </div>
        <div className=" text-4xl text-black">
          Annual Deal <br />{" "}
          <p className=" text-lg mt-5 ">
            We provide you annualy package at 200$. In this deal we give you
            unlimited access to all the features for one year.
          </p>
          <button className=" text-xl h-10 w-40 rounded-full bg-black text-white hover:bg-white hover:text-black hover:translate-y-2 p-2 mt-10">
            {" "}
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
