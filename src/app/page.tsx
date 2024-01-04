import Image from "next/image";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
export default function Home() {
  return (
    <div className="flex relative  flex-col items-center justify-center bg-[#280d5f99] h-[100vh]">
      <div className=" absolute top-10 flex items-center justify-between w-[95%] rounded-[20px] font-bold p-4 shadow-md bg-[#08060B] border border-zinc-600 my-4">
        <h1 className="flex  w-full bg-transparent text-white">
          Current Status
        </h1>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVR4nN3UPUrEQBQA4F3cajvxBOIBxAsIHkLvY6HgCfQCFtltLMRGZMW/GyheQMRVbCy08pPgE0J4yWY79cGDkHnzTeYxmV7v3wQWcY/XJI+aJq1gFwVGldzGMJ5PIyf49B3TDFvDmzxua7WDWFSgKXiCd6yj37L1Klbgsgl8wNWMPtaxQWw9BaflYAu2gMPAxiUW7ydzg9mXVcbG9R53AQ8yLMaG5ZGaF9zDfoLdlUcqmzOzhw1zyhj9XfAJ53Ng/QCLpoIbPGOpI7gR4E5TwVYUvOCscglkeYGP+PeX21bdxHWg2TX1k484xmrXFv2e+AKegf7SiQrYtwAAAABJRU5ErkJggg=="></img>
      </div>
      <Section />
    </div>
  );
}
