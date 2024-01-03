import React from "react";
import Button from "../Button/Button";
const Section = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[500px] h-[300px] bg-[#111111] rounded-lg">
      <div className="flex h-[33%] w-full items-center justify-between px-4 mx-2 border border-zinc-700 rounded-tr-lg rounded-tl-lg ">
        {" "}
        <h1 className="text-white">Deploying the contract</h1>
        <Button />
      </div>
      <div className="flex h-[33%]  w-full items-center justify-between px-4 mx-2 border border-zinc-700">
        {" "}
        <h1 className="text-white">Total Supply</h1>
        <Button />
      </div>
      <div className="flex h-[33%]  w-full items-center justify-between px-4 mx-2 border border-zinc-700 rounded-br-lg rounded-bl-lg">
        <h1 className="text-white"> Burn Tokens</h1>
        <Button />
      </div>
    </div>
  );
};

export default Section;
