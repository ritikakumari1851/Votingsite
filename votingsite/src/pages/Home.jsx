import React from "react";
import Slider from "../components/Slider";
import img1 from "../assets/Good team-pana.png";
import img3 from "../assets/03c5e1f41a08f714c252b6763457b843f8b8bc31-731x731.png";
import img4 from "../assets/decision.png";
import img2 from "../assets/elections-concept-group-people-voting-putting-ballot-papers-ballot-box-democracy_687327-377.avif";
import img5 from "../assets/Hand-drawn-election-day-voting-holding-card-illustration-voting-hands_132917_wh1200.png";
import img6 from "../assets/feature_college.webp";
import img8 from "../assets/GoVote.png";

import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="flex flex-col items-center pt-5">
      <div className="flex flex-col md:flex-row items-center mt-10 md:mt-10">
        <div className="md:w-full px-4 md:px-10 ">
          <p className="text-2xl mb-5 font-sans font-medium text-orange-600">
            Anonymous Voting & Customized Ballot
          </p>
          <p className="text-6xl mb-5 font-serif font-extrabold text-gray-900">
            Secure and Easy Access Elections
          </p>
          <p className="text-lg text-gray-400">
            Vote onclick guarantees election integrity, boosts voter engagement,
            and saves serious hours. It's free to test and free for up to 20
            voters. Easy and practical for all & Documentation is also available
            to know how to use.
          </p>
          <div className="flex flex-col md:flex-row md:items-center gap-4 mt-10">
            <button className="animate-bounce-slow bg-orange-600 p-4 pl-8 pr-8 font-serif text-xl text-white hover:bg-gray-900 rounded-md">
              <Link to={"/registration"}>Start Now</Link>
            </button>
            <p className="mt-2 md:mt-0 font-sans font-semibold text-blue-900 text-lg">
              <Link to={"/"}>Explore Services</Link>
            </p>
          </div>
        </div>
        <div className="md:w-full mt-6 md:mt-0">
          <img src={img1} className="w-full md:float-right" alt="Good Team" />
        </div>
      </div>
      <div className="max-h-[30vh] w-full mt-6 rounded-xl">
        <Slider />
      </div>
      <div className="mt-12 text-4xl text-black font-bold text-center border-t">
        <p className="pt-8 font-serif">Types of Elections You Can Organize</p>
        <p className="text-black text-3xl mt-4 font-medium">
          Cast Your Vote To.
        </p>
      </div>
      <p className="text-center mt-6 text-xl mx-20 text-black">
        Vote on click provides full freedom to the voters as well as the
        administrators. All the candidates are to be assigned by the admin
        randomly and voters can register themself for voting by logging in.
      </p>
      <div className="bg-black w-4/5 h-1/2 rounded-xl mt-10 relative">
        <div className="flex">
          <div className="relative w-1/2">
            <img src={img1} className="w-full" alt="Image 1" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Insititues
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img3} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              NGO
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img5} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              School
            </button>
          </div>
        </div>
        <div className="flex">
          <div className="relative w-1/2">
            <img src={img6} className="w-full" alt="Image 3" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Colleges
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img4} className="w-full" alt="Image 2" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Companies
            </button>
          </div>
          <div className="relative w-1/2">
            <img src={img2} className="w-full" alt="Image 4" />
            <button className="animate-bounce-slow bg-orange-600 p-2 font-serif text-lg text-white hover:bg-gray-900 rounded-md absolute bottom-0 left-32 mb-2">
              Studios
            </button>
          </div>
        </div>
      </div>

      <div>
        <p className="text-4xl text-black mt-20 text-center font-serif ">
          Take Your Vote To the Next Level with Us
        </p>
        <div className="flex flex-col md:flex-row justify-between h-80 w-full border bg-orange-500 md:p-10 mt-5">
          <div className=" flex flex-col">
            <div className=" text-4xl text-black  p-5 font-serif">
              {" "}
              Boost Engagement{" "}
            </div>
            <div className=" text-white font-semibold text-md md:w-full mr-3">
              Notify voters using email, mail, text message or with your own
              systems. Receive undeliverable notice alerts and send reminders.
              Voters vote by phone, computer, mail or in person.
              <br />
              <br />
              <br />
            </div>
          </div>
          <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
          <div className=" flex flex-col">
            <div className=" text-4xl text-black md:w-full p-5 font-serif">
              {" "}
              High-integrity Voting{" "}
            </div>
            <div className=" text-white font-semibold md:w-full ml-2 mr-7 text-md">
              Voters can only vote once and voting choices remain anonymous.
              Each ballot has one, secure voting key and the vote is auditable,
              verifiable and can be independently observed.
              <br />
              <br />
            </div>
          </div>
          <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
          <div className=" flex flex-col">
            <div className=" text-4xl text-black md:w-full p-5 font-serif">
              {" "}
              Flexible Ballots
            </div>
            <div className=" text-white font-semibold text-md md:w-full ml-4 ">
              Vote on executive officers, board positions, contract
              ratifications, bylaw amendments, budget approvals, acclamations
              and motions. Or run polls and surveys.
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between h-80 w-full border bg-white md:p-10">
          <div className=" flex flex-col">
            <div className=" text-4xl text-black  p-5">
              {" "}
              Automated and Simple{" "}
            </div>
            <div className=" text-gray-500 md:w-full font-semibold text-lg mr-7  ">
              Setup your Election or Meeting Votes in 3 steps - spend ur time
              monitoring, not counting. Or engage our experts for dedicated
              assistance or independent election oversight.
              <br />
              <br />
              <br />
            </div>
          </div>
          <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
          <div className=" flex flex-col">
            <div className=" text-4xl text-black md:w-full p-5">
              {" "}
              Real-time Results{" "}
            </div>
            <div className=" text-gray-500 md:w-full font-semibold text-lg ml-2 mr-7 ">
              Winners are immediately calculated using first past the post,
              cumulative voting, preferential ballot, STV Single transferable
              vote or approval voting. You can tabulate results yourself too!
              <br />
              <br />
            </div>
          </div>

          <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
          <div className=" flex flex-col">
            <div className=" text-4xl text-black md:w-full p-5">
              Secure and Private
            </div>
            <div className=" text-gray-500 md:w-full font-semibold text-lg ml-4">
              256-bit encryption used to safeguard your vote — the same security
              as major banks. And we don’t share or use voter data — your
              elections stay private.
              <br />
              <br />
            </div>
          </div>
        </div>
        <div class=" w-2 bg-gradient-to-b from-black to-black h-auto"></div>
        <div className="text-4xl text-orange-600 font-bold mt-10 text-center font-serif ">
          Voting done right with the right help you need <br />{" "}
          <p className=" text-lg text-black font-normal p-5">
            We’ve seen thousands of organizations handle millions of voters so
            we understand your wants and needs. Whether you want to run it
            yourself, need a little training, or have us do the entire vote for
            you, we can do it your way
          </p>
        </div>
        <body class="font-sans flex flex-row bg-gray-100">
          <div class="flex flex-col font-bold font-serif items-center justify-center h-[85vh] bg-orange-500">
            <div class="text-black text-3xl mt-5">Set Up Voting Yourself</div>
            <br />
            <p className=" text-white text-lg font-normal ml-5">
              Just answer a few questions, and we'll guide you through the set
              up of your vote.
            </p>
            <img src={img8} className=" h-96 w-72 mt-5 rounded-full" />
            <div class="w-full h-40 flex items-center justify-center cursor-pointer">
              <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  <Link to={"/pricing"}>Get Product & Price</Link>
                </span>
              </div>
            </div>
          </div>
          <div className=" border-r-2 border-black"></div>
          <div class="flex flex-col font-bold  font-serif items-center justify-center h-[85vh] bg-white">
            <div class="text-black text-3xl mt-5  ">
              Voting Experts Can Help
            </div>
            <br />
            <p className=" text-black text-lg font-normal ml-5">
              Get advice and answers as you go, with a final Expert review
              before voting starts.
            </p>
            <img src={img1} className=" h-96 w-72 mt-5" />
            <div class="w-full h-40 flex items-center justify-center cursor-pointer">
              <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  <Link to={"/pricing"}>Get Product & Price</Link>
                </span>
              </div>
            </div>
          </div>
          {/* <div class="w-4 bg-gradient-to-b from-blue-500 via-green-400 to-blue-500 h-auto"></div> */}
          <div className=" border-r-2 border-black"></div>
          <div class="flex flex-col font-bold  font-serif items-center justify-center h-[85vh] bg-orange-500">
            <div class="text-black text-3xl mt-5">We Do Your Voting Setup</div>{" "}
            <br />
            <p className=" text-white text-lg font-normal ml-5">
              Have a dedicated Expert do it all remotely or onsite, from the
              start of voting to results.
            </p>
            <img src={img4} className=" h-96 w-72 mt-5 rounded-full" />
            <div class="w-full h-40 flex items-center justify-center cursor-pointer">
              <div class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 dark:bg-gray-700 dark:text-white dark:hover:text-gray-200 dark:shadow-none group">
                <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-5 h-5 text-green-400"
                  >
                    <path
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                </span>
                <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white dark:group-hover:text-gray-200">
                  <Link to={"/login"}>Get Product & Price</Link>
                </span>
              </div>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
