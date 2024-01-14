import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
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
          src="..\src\assets\AdobeStock_385320928-Converted.png"
          className=" relative rounded-xl max-h-[30vh] backdrop-blur-lg bg-black opacity-70"
        />
      </div>
      <div>
        <img
          src="..\src\assets\1000_F_279690453_68EyiIBuu8UBtUtpNnSLH8Hr9vf4CxZ8.jpg"
          className=" rounded-xl max-h-[30vh] backdrop-blur-lg bg-black opacity-70"
        />
       
      </div>
      <div>
        <img
          src="..\src\assets\GoVote.png"
          className=" rounded-xl max-h-[30vh] backdrop-blur-lg bg-white opacity-70"
        />
      </div>
    </Carousel>
  );
}
