import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiFillSignal, AiOutlineUser } from "react-icons/ai";
import StatComp from "./StatComp";
import { ImEarth } from "react-icons/im";

export default function Stats() {
  return (
    <div className="bg-[#0D0D2B] pb-8">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="pt-10 sm:pt-0 w-[77%] ml-auto mr-auto flex flex-col lg:flex-row lg:justify-between">
          {/*first*/}
          <StatComp />
          <div className="py-4 flex flex-row justify-start place-self-center">
            <div className="h-[50px] w-[50px] rounded-full bg-[#4b5563] py-2 px-[9px] mr-4">
              <AiOutlineUser className="text-blue-500 text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-semi-bold text-2xl text-white">190+</span>
              <span className="font-thin text-xs text-gray-400">
                Countries Around The World
              </span>
            </div>
          </div>
          <div className="py-4 flex flex-row justify-start place-self-center">
            <div className="h-[50px] w-[50px] rounded-full bg-[#4b5563] py-[9.5px] px-[9.5px] mr-4">
              <ImEarth className="text-blue-500 text-3xl" />
            </div>
            <div className="flex flex-col">
              <span className="font-semi-bold text-2xl text-white">$10M</span>
              <span className="font-thin text-xs text-gray-400">
                Trusted Wallet Investors
              </span>
            </div>
          </div>
          {/* first ends */}
        </div>
      </AnimationOnScroll>
    </div>
  );
}
