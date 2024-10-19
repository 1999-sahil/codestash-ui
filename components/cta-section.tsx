import Link from "next/link";
import React from "react";
import { BiLogoJavascript, BiLogoTypescript } from "react-icons/bi";
import { FaArrowRight, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import { FiPieChart } from "react-icons/fi";
import { GrHtml5 } from "react-icons/gr";
import { SiCplusplus } from "react-icons/si";

function CTASection() {
  return (
    <div className="px-4 pt-12 lg:pt-20 flex flex-col items-start justify-start lg:items-center lg:justify-center gap-6">
      <div className="flex items-center gap-2">
        <FiPieChart className="text-zinc-800 dark:text-zinc-200" />
        <div className="w-[1px] h-[16px] bg-zinc-700 dark:bg-zinc-400" />
        <h2 className="text-sm font-roboto font-medium flex items-center justify-start lg:justify-center">
          A{" "}
          <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded-md mx-1">
            free
          </span>{" "}
          repository for your application
        </h2>
      </div>
      <div className="w-full max-w-5xl flex flex-col items-start lg:items-center lg:justify-center gap-4">
        <h1 className="font-bold font-kanit text-4xl lg:text-5xl">
          Build Smarter, Code Faster :
        </h1>
        <p className="w-full max-w-2xl text-start lg:text-center font-medium font-poppins text-base lg:text-lg text-[#111] dark:text-zinc-100">
          Effortless UI Components, crafted using Tailwind CSS. Spend more time
          creating code, and less time debugging errors with&nbsp;
          <span className="underline underline-offset-2">codestash/ui</span> code
          snippets.
        </p>
        <div className="flex flex-col gap-2 lg:gap-4 items-start lg:items-center justify-start lg:justify-center">
          <div className="flex items-center gap-4 lg:gap-6 font-raleway text-zinc-500 dark:text-zinc-400 text-xs lg:text-sm font-medium mt-4">
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <GrHtml5 className="text-xl" />
              <h2>HTML</h2>
            </span>
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <FaReact className="text-xl" />
              <h2>React.js</h2>
            </span>
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <FaVuejs className="text-xl" />
              <h2>Vue.js</h2>
            </span>
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <BiLogoJavascript className="text-xl" />
              <h2>Javascript</h2>
            </span>
          </div>
          <div className="flex items-center gap-4 lg:gap-6 font-raleway text-zinc-500 dark:text-zinc-400 text-xs lg:text-sm font-medium mt-4">
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <BiLogoTypescript className="text-xl" />
              <h2>Typescript</h2>
            </span>
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <FaPython className="text-xl" />
              <h2>Python</h2>
            </span>
            <span className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 p-2 rounded-full">
              <SiCplusplus className="text-xl" />
              <h2>C++</h2>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full gap-4 lg:gap-8 md:flex-row font-ubuntu font-normal mt-8">
          <Link href="">
            <button className="w-full lg:w-fit flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-50 hover:bg-opacity-95 dark:hover:bg-opacity-90 text-white dark:text-black rounded-md py-3 lg:px-6">
              Browse components
              <FaArrowRight />
            </button>
          </Link>
          <Link href="">
            <button className="w-full lg:w-fit flex items-center justify-center gap-2 border-[1px] rounded-md border-zinc-400 bg-zinc-100 dark:bg-[#111] hover:bg-white dark:hover:bg-black/30 py-3 lg:px-6">
              Explore snippets
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTASection;
