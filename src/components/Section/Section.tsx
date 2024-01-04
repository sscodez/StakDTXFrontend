"use client";

import React from "react";
import Button from "../Button/Button";
import { useState } from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";
const Section = () => {
  const [option, setOption] = useState("liquidity");
  const { open } = useWeb3Modal();
  return (
    <div className="flex flex-col items-center justify-center w-[500px] h-[350px] bg-[#27262C] rounded-[20px] shadow-md">
      <div className="flex items-center justify-center w-full  p-4">
        <div
          onClick={() => setOption("liquidity")}
          className="flex items-center justify-center cursor-pointer w-[48%]  text-white bg-[#7a6eaa] rounded-[10px] font-bold  px-4 py-1 m-2"
        >
          Liquidity
        </div>
        <div
          onClick={() => setOption("token")}
          className="flex items-center justify-center  w-[48%] cursor-pointer shadow-md text-white bg-[#7a6eaa] rounded-[10px] font-bold px-4 py-1 m-2 "
        >
          Token
        </div>
        <div
          onClick={() => setOption("burn")}
          className="flex items-center justify-center  w-[48%] cursor-pointer shadow-md text-white bg-[#7a6eaa] rounded-[10px] font-bold px-4 py-1 m-2 "
        >
          Burn
        </div>
      </div>
      {option === "liquidity" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token 1 Address"
          />
        </div>
      )}
      {option === "token" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token Name"
          />
        </div>
      )}
      {option === "token" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token Supply"
          />
        </div>
      )}
      {option === "liquidity" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token 2 Address "
          />
        </div>
      )}
      {option === "burn" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token  Address to Burn "
          />
        </div>
      )}
      {option === "burn" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token  Amount to Burn "
          />
        </div>
      )}
      {option === "liquidity" && (
        <button
          onClick={() => open()}
          className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
        >
          Add liquidty
        </button>
      )}
      {option === "token" && (
        <button
          onClick={() => open()}
          className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
        >
          Create Token
        </button>
      )}
      {option === "burn" && (
        <button
          onClick={() => open()}
          className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
        >
          Burn Token
        </button>
      )}
    </div>
  );
};

export default Section;
