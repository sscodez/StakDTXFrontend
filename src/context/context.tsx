"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
type MyContextType = {
  steps: string;
  setSteps: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  valueThree: boolean;
  setValueThree: React.Dispatch<React.SetStateAction<boolean>>;
  selectedFile: string;
  setSelectedFile: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
  handleFileChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  imageSlug: string;
  handleStatus: (e: any) => void;
  errorResponse: string;
  setErrorResponse: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context
const MyContext = createContext<MyContextType | undefined>(undefined);

// Custom hook to access context values
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

// Provider component to wrap around your app
export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [steps, setSteps] = useState<string>("1");
  const [name, setName] = useState<string>("");
  const [valueThree, setValueThree] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState("");
  const [imageSlug, setImageSlug] = useState("");
  const [errorResponse, setErrorResponse] = useState("");
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    // Your logic for handling click
    // Update state or perform any action needed
  };
  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    // if (file && file.type === "zip") {
    setSelectedFile(file);
    toast.success("Zip file uploaded successfully");
    setSteps("2");
  };

  const handleSubmit = async (event: any) => {
    try {
      if (!name) {
        return;
      }
      setIsLoading(true);

      const captureResponse = await fetch("/api/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const { uploadUrl, slug } = await captureResponse.json();
      console.log("Capture slug:", slug);
      console.log("Upload URL:", uploadUrl);
      const Uploadedresponse = await fetch("/api/upload", {
        method: "PUT",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({ uploadUrl, selectedFile }),
      });

      setImageSlug(slug);
      const TriggerResponse = await fetch(`/api/trigger`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ slug }),
      });
      console.log(TriggerResponse);

      setIsLoading(false);
      setSteps("3");
    } catch (error) {
      console.error("Error occurred:", error);
      setIsLoading(false);
      // Handle error state or display error message to the user
    }
  };

  const handleStatus = async () => {
    if (imageSlug) {
      const StatusResponse = await fetch(`/api/check`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ imageSlug }),
      });

      const { reserrorResponse, resprogress, resstatuslevel } =
        await StatusResponse.json();
      console.log(status);

      setErrorResponse(reserrorResponse);
      setProgress(resprogress);
      setStatus(resstatuslevel);
    }
  };

  const contextValue: MyContextType = {
    steps,
    setSteps,
    name,
    setName,
    valueThree,
    setValueThree,
    selectedFile,
    setSelectedFile,
    handleClick,
    handleFileChange,
    handleSubmit,
    imageSlug,
    handleStatus,
    errorResponse,
    setErrorResponse,
    isLoading,
    setIsLoading,
    progress,
    setProgress,
    status,
    setStatus,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
