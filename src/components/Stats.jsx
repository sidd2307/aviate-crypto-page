import React from "react";
import { AiFillSignal } from "react-icons/ai";
import StatComp from "./StatComp";

export default function Stats() {
  return (
    <div className="bg-[#0D0D2B] pb-8">
      <div className="w-[77%] ml-auto mr-auto flex flex-col lg:flex-row lg:justify-between">
        {/*first*/}
        <StatComp />
        <StatComp />
        <StatComp />
        TODO: fix padding issues in mobile devices
        {/* first ends */}
      </div>
    </div>
  );
}
