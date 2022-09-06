import React from "react";
import WhyImg from "../static/why-img.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Info() {
  return (
    <div className="bg-[#0D0D2B] pt-1 xl:pt-10">
      {/* <AnimationOnScroll
        animateIn="animate__zoomIn"
        // initiallyVisible="True"
        delay={20}
      > */}
      <div className="w-[100%] sm:w-[90%] md:w-[85%] mx-auto flex flex-col lg:flex-row">
        {/* right section */}
        <AnimationOnScroll animateIn="animate__zoomIn">
          <div className="mx-auto w-[90%] md:w-[600px]">
            <img className="md:h-[90%]" src={WhyImg} alt="" />
          </div>
        </AnimationOnScroll>

        {/* left section */}
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="flex flex-col justify-evenly h-[320px] w-[90%] mx-auto max-w-[700px]">
            {/* heading */}
            <div className="font-light text-4xl lg:text-5xl text-white">
              Why you should choose CHAPPO
            </div>

            {/* desc */}
            <div className="text-gray-400 text-base">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </div>

            <div className="w-[142px] h-[40px] bg-[#3671E9] rounded-full px-3 py-2 cursor-pointer flex flex-row justify-between">
              <span className="text-white text-base">Learn More</span>
            </div>
          </div>
        </AnimationOnScroll>
      </div>
      {/* </AnimationOnScroll> */}
    </div>
  );
}
