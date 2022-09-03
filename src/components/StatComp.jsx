import React from "react";
import { AiFillSignal } from "react-icons/ai";

export default function StatComp() {
  return (
    <div className="py-4 flex flex-row justify-start place-self-center">
      <div className="h-[50px] w-[50px] rounded-full bg-[#4b5563] p-2 mr-4">
        <AiFillSignal className="text-blue-500 text-3xl" />
      </div>
      <div className="flex flex-col">
        <span className="font-semi-bold text-2xl text-white">$30B</span>
        <span className="font-thin text-xs text-gray-400">
          Digital Currency Exchange
        </span>
      </div>
    </div>
  );
}
