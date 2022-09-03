import React from "react";
import { AiFillSignal } from "react-icons/ai";
import StatComp from "./StatComp";

export default function Stats() {
  return (
    <div className="bg-[#0D0D2B] pb-8">
      <div className="pt-10 sm:pt-0 w-[77%] ml-auto mr-auto flex flex-col lg:flex-row lg:justify-between">
        {/*first*/}
        <StatComp />
        <StatComp />
        <StatComp />
        {/* first ends */}
      </div>
    </div>
  );
}
