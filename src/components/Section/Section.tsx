import React from "react";
import Button from "../Button/Button";
const Section = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[500px] h-[350px] bg-[#27262C] rounded-[20px] shadow-md">
      <div className="flex items-center justify-center w-full  p-4">
        <div className="flex items-center justify-center cursor-pointer w-[48%]  text-white bg-[#7a6eaa] rounded-[10px] font-bold  px-4 py-1 m-2">
          Liquidity
        </div>
        <div className="flex items-center justify-center  w-[48%] cursor-pointer shadow-md text-white bg-[#7a6eaa] rounded-[10px] font-bold px-4 py-1 m-2 ">
          Token
        </div>
      </div>
      <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
        <input
          className="flex outline-none w-full bg-transparent text-white"
          placeholder="Enter Token 1 Address"
        />
      </div>
      <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
        <input
          className="flex outline-none w-full bg-transparent text-white"
          placeholder="Enter Token 2 Address "
        />
      </div>
      <button className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]">
        Add liquidty
      </button>
    </div>
  );
};

export default Section;
