"use client";
import { useContractWrite, useAccount } from "wagmi";
import { useState } from "react";
import ERC20TokenFactoryABI from "../../chain-info/abi/ERC20TokenFactoryabi.json";
import ERC20TokenFactoryAddress from "../../chain-info/contract-address/ERC20TokenFactoryaddress.json";
import ERC20BurnFactoryABI from "../../chain-info/abi/ERC20BurnFactoryabi.json";
import React from "react";
import Button from "../Button/Button";
import { useWeb3Modal } from "@web3modal/wagmi/react";
const Section = () => {
  const [option, setOption] = useState("liquidity");
  const { open } = useWeb3Modal();
  const { connector: activeConnector, isConnected, address } = useAccount();
  const [tokenName, setTokenName] = useState("");
  const [initalSupply, setInitalSupply] = useState(0);
  const [burnAmount, setBurnAmount] = useState(0);
  const [burnToken, setBurnToken] = useState("");
  const [liquidityToken1, setLiquidityToken1] = useState("");
  const [liquidityToken2, setLiquidityToken2] = useState("");
  const [liquidityAmount1, setLiquidityAmount1] = useState(0);
  const [liquidityAmount2, setLiquidityAmount2] = useState(0);

  const { data: useContractWriteData, write: myfunc } = useContractWrite({
    address: "0x2487FD2FaE2A44DB20488d2BfbB5588AAe26D235",
    abi: ERC20TokenFactoryABI.abi,
    functionName: "createToken",
    args: ["Sa", "Sa", 100000000, "0x4536b462d0ca9449cDfd5C3E766fd0bd6976db5B"],
    chainId: 97,
    onError(error: any) {
      console.log("Error", error);
      console.log(address);
    },
    onSuccess(data) {
      console.log("Success", data);
    },
  });

  const { data: useContractWriteData1, write: myfunc1 } = useContractWrite({
    address: "0x2487FD2FaE2A44DB20488d2BfbB5588AAe26D235",
    abi: ERC20TokenFactoryABI.abi,
    functionName: "burn",
    args: [burnToken, burnAmount],
    chainId: 97,
  });

  const { data: useContractWriteData2, write: myfunc2 } = useContractWrite({
    address: "0xCD141376078085395cfb2a53256948FA89628529",
    abi: ERC20BurnFactoryABI.abi,
    functionName: "addLiquidity",
    args: [
      liquidityToken1,
      liquidityToken2,
      liquidityAmount1,
      liquidityAmount2,
    ],
    chainId: 97,
  });

  return (
    <div className="flex flex-col items-center justify-center w-[500px]  bg-[#27262C] rounded-[20px] shadow-md">
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
            value={liquidityToken1}
            onChange={(e: any) => setLiquidityToken1(e.target.value)}
          />
        </div>
      )}

      {option === "liquidity" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token 2 Address"
            value={liquidityToken2}
            onChange={(e: any) => setLiquidityToken2(e.target.value)}
          />
        </div>
      )}

      {option === "liquidity" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token 1 Amount"
            value={liquidityAmount1}
            onChange={(e: any) => setLiquidityAmount1(e.target.value)}
          />
        </div>
      )}
      {option === "liquidity" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token 2 Amount "
            value={liquidityAmount2}
            onChange={(e: any) => setLiquidityAmount2(e.target.value)}
          />
        </div>
      )}
      {option === "token" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token Name"
            onChange={(e: any) => setTokenName(e.target.value)}
          />
        </div>
      )}
      {option === "token" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md border border-zinc-600 bg-[#08060B] my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token Supply"
            value={initalSupply}
            onChange={(e: any) => setInitalSupply(e.target.value)}
          />
        </div>
      )}

      {option === "burn" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token  Address to Burn "
            value={burnToken}
            onChange={(e: any) => setBurnToken(e.target.value)}
          />
        </div>
      )}
      {option === "burn" && (
        <div className="flex items-center justify-center w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
          <input
            className="flex outline-none w-full bg-transparent text-white"
            placeholder="Enter Token  Amount to Burn "
            value={burnAmount}
            onChange={(e: any) => setBurnAmount(e.target.value)}
          />
        </div>
      )}
      {option === "liquidity" && [
        isConnected && (
          <button
            onClick={() => myfunc2?.()}
            className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
          >
            Add liquidty
          </button>
        ),
      ]}
      {option === "token" && [
        isConnected && (
          <button
            // onClick={() => open()}
            className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
            onClick={() => myfunc?.()}
          >
            Create Token
          </button>
        ),
      ]}
      {isConnected &&
        option === "burn" && [
          isConnected && (
            <button
              onClick={() => myfunc1?.()}
              className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
            >
              Burn Token
            </button>
          ),
        ]}
      {!isConnected && (
        <button
          onClick={() => open()}
          className="flex items-center justify-center w-[95%] rounded-[20px] font-bold shadow-md p-4 my-4 bg-[#1fc7d4]"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Section;
