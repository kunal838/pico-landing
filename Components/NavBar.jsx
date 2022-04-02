import React from "react";

//Icons
import { SiNextdotjs } from "react-icons/si";
import { MdNightlight } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
//Context
import { useHandle } from "../context/HandleContext";

export default function NavBar() {
  const { isDark, setDark } = useHandle();
  return (
    <nav className=' fixed top-0 h-16 w-screen z-50  backdrop-blur-md border-b-[1px] dark:border-[#212121] flex flex-row items-center justify-between pl-10 pr-10 ease-linear duration-200'>
      <div className='flex flex-row items-center'>
        <SiNextdotjs size={45} className=' text-[#3ddc84] ' />
        <div className='dark:text-white pl-3 text-3xl font-bold text-black ease-linear  duration-200'>
          Next.js
        </div>
      </div>
      <div className='w-[80px] flex flex-row justify-between'>
        <button className=' ease-linear duration-200 active:scale-50 dark:text-white active:text-[#3ddc84] dark:active:text-[#3ddc84]'>
          <VscGithubInverted size={30} />
        </button>
        <button
          className=' ease-linear duration-200 active:scale-50 dark:text-white active:text-[#3ddc84] dark:active:text-[#3ddc84]'
          onClick={() => setDark(!isDark)}
        >
          {isDark ? <MdLightMode size={30} /> : <MdNightlight size={30} />}
        </button>
      </div>
    </nav>
  );
}
