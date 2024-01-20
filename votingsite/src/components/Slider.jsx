import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from '../assets/AdobeStock_385320928-Converted.png'
import img2 from '../assets/1000_F_279690453_68EyiIBuu8UBtUtpNnSLH8Hr9vf4CxZ8.jpg'
import img3 from '../assets/GoVote.png'
export default function Slider() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      stopOnHover={false}
      interval={2000}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      showStatus={false}
      width={"100%"}
    >
      <div className="">
        <img
          src={img1}
          className=" relative rounded-xl max-h-[30vh] backdrop-blur-lg bg-black opacity-70"
        />
      </div>
      <div>
        <img
          src={img2}
          className=" rounded-xl max-h-[30vh] backdrop-blur-lg bg-black opacity-70"
        />
       
      </div>
      <div>
        <img
          src={img3}
          className=" rounded-xl max-h-[30vh] backdrop-blur-lg bg-white opacity-70"
        />
      </div>
    </Carousel>
  );
}
