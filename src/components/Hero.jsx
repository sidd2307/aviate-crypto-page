import React from "react";
import HeroImg from "../static/hero-img.png";
import { AiOutlineCaretRight } from "react-icons/ai";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Hero() {
  return (
    <div className="bg-[#0D0D2B] pt-1 xl:pt-10">
      <div className="w-[100%] sm:w-[90%] md:w-[85%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
        {/* left section */}
        <div className="flex flex-col justify-evenly h-[320px] mx-auto md:mt-10 w-[90%] md:w-[500px]">
          {/* section1 */}
          <div className="flex flex-row justify-between w-[90%] sm:w-[300px] bg-[#4b5563] p-1 rounded-full">
            <span className="text-xs py-1 px-2 text-[#c0b9c4] bg-white rounded-full">
              70% SAVE
            </span>
            <span className="text-sm text-[#ebecee] pr-2">
              for the best black friday deals
            </span>
          </div>

          {/* heading */}

          <div className="font-semi-bold text-4xl lg:text-5xl text-white">
            Fastest & Secure Platform To Invest In Cypto
          </div>

          {/* desc */}
          <div className="text-[#E0E0E0] text-xs">
            buy and sell cyptocurrencies by trusted 10M wallets, in over 100m
            transactions
          </div>
          {/* </AnimationOnScroll> */}

          <div className="w-[202px] h-[40px] bg-[#3671E9] rounded-full px-3 py-2 cursor-pointer flex flex-row justify-between">
            <span className="text-white text-base">Try For Free</span>
            <span className="bg-white rounded-full p-1">
              <AiOutlineCaretRight color="#3671E9" />
            </span>
          </div>
          {/* </AnimationOnScroll> */}
        </div>

        {/* right section */}
        <div className="mx-auto md:w-[500px]">
          {/* <AnimationOnScroll
            animateIn="animate__zoomIn"
            delay={500}
            initiallyVisible="True"
            animateOnce="True"
          > */}
          <img className="md:h-[85%]" src={HeroImg} alt="" />
          {/* </AnimationOnScroll> */}
        </div>
      </div>
    </div>
  );
}
