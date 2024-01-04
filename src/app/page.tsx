import Image from "next/image";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
export default function Home() {
  return (
    <div className="flex relative  flex-col items-center justify-center bg-[#280d5f99] h-[100vh]">
      {/* <Header /> */}
      <Section />
    </div>
  );
}
