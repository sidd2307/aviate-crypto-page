import React from "react";
import Logo from "../static/logo.svg";
import Visa from "../static/visa.png";
import MasterCard from "../static/mastercard.png";
import Bitcoin from "../static/bitcoin.png";
export default function Footer() {
  return (
    <div className="bg-[#0D0D2B] flex flex-col lg:flex-row px-4 lg:px-32 justify-between">
      <div className="w-[100%] lg:w-[20%] pb-10 mx-auto lg:text-left lg:mx-0">
        <img className="mx-auto lg:mx-0" src={Logo} alt="" />
      </div>

      <div className="flex flex-col h-[300px] w-[100%] lg:w-[20%] mx-auto text-center lg:text-left lg:mx-0">
        <span className="text-white font-normal text-lg mb-5">Quick Links</span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Home
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Products
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          About
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Features
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Contact
        </span>
      </div>

      <div className="flex flex-col h-[270px] w-[100%] lg:w-[20%] mx-auto text-center lg:text-left lg:mx-0">
        <span className="text-white font-normal text-lg mb-5">
          Resources Links
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Download Whitepapper
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Smart Token
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Blockchain Explore
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Crypto API
        </span>
        <span className="text-white font-thin text-base py-2 hover:text-[#3671E9] cursor-pointer">
          Interest
        </span>
      </div>

      <div className="flex flex-col max-h-[270px] w-[100%] lg:w-[30%] mx-auto text-center lg:text-left lg:mx-0">
        <span className="text-white font-normal text-lg mb-5">
          We accept following payment systems
        </span>
        <div className="flex flex-row justify-between mt-2">
          <div className="h-[64px] w-[96px] pr-2">
            <img src={Visa} alt="" />
          </div>
          <div className="h-[64px] w-[96px] pr-2">
            <img src={MasterCard} alt="" />
          </div>
          <div className="h-[64px] w-[96px]">
            <img src={Bitcoin} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
