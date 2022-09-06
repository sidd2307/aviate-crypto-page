import React, { useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { AiOutlineRight } from "react-icons/ai";
import BitCoinImg from "../static/bitcon.png";
import EthCoinImg from "../static/ethereum.png";
import LitCoinImg from "../static/litecoin.png";

export default function Cards() {
  const [coin, setcoin] = useState("bitcoin");
  return (
    <div className="bg-gray-100 pb-10 pt-20">
      <AnimationOnScroll animateIn="animate__zoomIn">
        <div className="text-black text-2xl w-[90%] md:w-[70%] lg:w-[60%] ml-auto mr-auto text-center font-semibold">
          Trade Securely And Market The High Growth Cryptocurrencies.
        </div>
      </AnimationOnScroll>

      <div className="flex flex-col w-[90%] mx-auto xl:flex-row justify-between mt-9">
        {/* card */}
        <div
          className="flex flex-col justify-evenly w-[90%] sm:w-[85%] xl:w-[25%] mx-auto rounded-3xl p-5 h-[433px] cursor-pointer my-5"
          style={{
            backgroundColor: coin === "bitcoin" ? "#2B076E" : "#ffffff",
          }}
          onClick={() => setcoin("bitcoin")}
        >
          <div className="mx-auto">
            <img
              className="h-[80px] w-[80px] rounded-[40px]"
              src={BitCoinImg}
              alt=""
            />
          </div>
          <div
            className="text-3xl font-semibold mx-auto"
            style={{ color: coin === "bitcoin" ? "white" : "black" }}
          >
            Bitcoin{" "}
            <span className="text-base align-middle font-normal text-gray-400">
              BTC
            </span>
          </div>

          <div
            className="mx-auto text-center text-base"
            style={{ color: coin === "bitcoin" ? "white" : "black" }}
          >
            Digital currency in which a record of transactions is maintained.
          </div>

          {coin === "bitcoin" ? (
            <div className="w-[202px] h-[60px] bg-[#3671E9] rounded-full p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="text-white text-xl">Start Mining</span>
              <span className="rounded-full p-1 text-xl">
                <AiOutlineRight color="white" />
              </span>
            </div>
          ) : (
            <div className="w-[60px] h-[60px] bg-[#ffffff] rounded-full border-[1px] border-gray-400 p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="rounded-full text-2xl">
                <AiOutlineRight color="#3671E9" />
              </span>
            </div>
          )}
        </div>
        <div
          className="flex flex-col justify-evenly w-[90%] sm:w-[85%] xl:w-[25%] mx-auto rounded-3xl p-5 h-[433px] cursor-pointer my-5"
          style={{
            backgroundColor: coin === "ethereum" ? "#2B076E" : "#ffffff",
          }}
          onClick={() => setcoin("ethereum")}
        >
          <div className="mx-auto">
            <img
              className="h-[80px] w-[80px] rounded-[40px]"
              src={EthCoinImg}
              alt=""
            />
          </div>
          <div
            className="text-3xl font-semibold mx-auto"
            style={{ color: coin === "ethereum" ? "white" : "black" }}
          >
            Ethereum{" "}
            <span className="text-base align-middle font-normal text-gray-400">
              ETH
            </span>
          </div>

          <div
            className="mx-auto text-center text-base"
            style={{ color: coin === "ethereum" ? "white" : "black" }}
          >
            Blockchain technology to create and run decentralized digital
            applications.
          </div>

          {coin === "ethereum" ? (
            <div className="w-[202px] h-[60px] bg-[#3671E9] rounded-full p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="text-white text-xl">Start Mining</span>
              <span className="rounded-full p-1 text-xl">
                <AiOutlineRight color="white" />
              </span>
            </div>
          ) : (
            <div className="w-[60px] h-[60px] bg-[#ffffff] rounded-full border-[1px] border-gray-400 p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="rounded-full text-2xl">
                <AiOutlineRight color="#3671E9" />
              </span>
            </div>
          )}
        </div>
        <div
          className="flex flex-col justify-evenly w-[90%] sm:w-[85%] xl:w-[25%] mx-auto rounded-3xl p-5 h-[433px] cursor-pointer my-5"
          style={{
            backgroundColor: coin === "litcoin" ? "#2B076E" : "#ffffff",
          }}
          onClick={() => setcoin("litcoin")}
        >
          <div className="mx-auto">
            <img
              className="h-[80px] w-[80px] rounded-[40px]"
              src={LitCoinImg}
              alt=""
            />
          </div>
          <div
            className="text-3xl font-semibold mx-auto"
            style={{ color: coin === "litcoin" ? "white" : "black" }}
          >
            Litcoin{" "}
            <span className="text-base align-middle font-normal text-gray-400">
              LTC
            </span>
          </div>

          <div
            className="mx-auto text-center text-base"
            style={{ color: coin === "litcoin" ? "white" : "black" }}
          >
            Cryptocurrency that enables instant payments to anyone in the world.
          </div>

          {coin === "litcoin" ? (
            <div className="w-[202px] h-[60px] bg-[#3671E9] rounded-full p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="text-white text-xl">Start Mining</span>
              <span className="rounded-full p-1 text-xl">
                <AiOutlineRight color="white" />
              </span>
            </div>
          ) : (
            <div className="w-[60px] h-[60px] bg-[#ffffff] rounded-full border-[1px] border-gray-400 p-4 cursor-pointer flex flex-row justify-between mx-auto">
              <span className="rounded-full text-2xl">
                <AiOutlineRight color="#3671E9" />
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
