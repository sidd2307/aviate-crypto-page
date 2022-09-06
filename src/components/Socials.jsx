import React from "react";
import {
  AiFillYoutube,
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
export default function Socials() {
  return (
    <div className="bg-[#0D0D2B] flex flex-col md:flex-row p-4 md:px-32 md:py-10 justify-between">
      <div className="text-white text-lg font-thin w-[90%] md:w-[30%] mx-auto md:mx-0 py-3 text-center md:text-left">
        © 2022 CRAPPO. All rights reserved.
      </div>

      <div className="flex flex-row w-[90%] md:w-[30%] justify-between">
        <span className="text-white hover:text-[#3671E9] cursor-pointer text-2xl px-2">
          <AiFillYoutube />
        </span>
        <span className="text-white hover:text-[#3671E9] cursor-pointer text-2xl px-2">
          <AiOutlineWhatsApp />
        </span>
        <span className="text-white hover:text-[#3671E9] cursor-pointer text-2xl px-2">
          <AiFillInstagram />
        </span>
        <span className="text-white hover:text-[#3671E9] cursor-pointer text-2xl px-2">
          <AiOutlineTwitter />
        </span>
        <span className="text-white hover:text-[#3671E9] cursor-pointer text-2xl px-2">
          <AiFillLinkedin />
        </span>
      </div>
    </div>
  );
}
