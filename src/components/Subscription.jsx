import React from "react";

export default function Subscription() {
  return (
    <div className="min-h-[392px] bg-gradient-to-b from-[#2B076E] to-[#0D0D2B] p-5 sm:p-20 md:p-32">
      <div className="bg-[#3671E9] p-10 rounded-lg flex flex-col lg:flex-row flex-wrap justify-between">
        <div className="flex flex-col justify-between w-[90%] lg:w-[50%]">
          <div className="text-xl text-white font-semibold mb-7 w-[100%]">
            Start Mining Now
          </div>
          <div className="text-sm text-white font-thin w-[100%] text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste,
            ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            saepe.
          </div>
        </div>

        <div className="w-[90%] lg:w-[50%] flex flex-row flex-wrap">
          <input
            className="my-7 mx-auto w-[90%] lg:w-[50%] border-b-2 border-x-white bg-inherit peer block appearance-none text-xl text-white placeholder:text-white placeholder:text-sm focus:outline-none focus:ring-0"
            type="text"
            placeholder="Enter Message"
          />

          <div className="mx-auto my-7 md: w-[142px] h-[50px] bg-white rounded-lg px-[20px] text-center py-[10px] cursor-pointer flex flex-row justify-between">
            <span className="text-black text-xl">Calculate</span>
          </div>
        </div>
      </div>
    </div>
  );
}
