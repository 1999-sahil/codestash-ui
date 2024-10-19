"use client";

import React, { useState } from "react";
import Logo from "./logo";
import ThemeToggle from "./theme-toggle";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileNavigation from "./mobile-navbar";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  }

  return (
    <div className="flex items-center justify-between w-full px-4 py-2 lg:px-8 lg:py-3">
      <div className="flex items-center gap-10">
        <Logo />
        <div className="hidden md:flex items-center gap-5 font-openSans text-sm font-semibold text-zinc-700 dark:text-zinc-400">
          <Link
            href="/snippets"
            className="hover:text-black dark:hover:text-white"
          >
            <h2>Snippets</h2>
          </Link>
          <Link
            href="/ui-components"
            className="hover:text-black dark:hover:text-white"
          >
            <h2>UI Components</h2>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden lg:flex items-center gap-2 font-medium font-roboto text-sm">
          <Link href="">
            <button className="px-2.5 py-1.5 hover:bg-zinc-100 hover:text-black dark:hover:bg-zinc-900 dark:hover:text-white rounded-md">
              Log in
            </button>
          </Link>
          <Link href="">
            <button className="px-2.5 py-1.5 rounded-md text-white dark:text-black bg-zinc-800 dark:bg-zinc-100 hover:bg-zinc-900 dark:hover:bg-zinc-200">
              Get Started
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex w-[1px] bg-black dark:bg-white h-[24px]" />
        <div className="flex items-center">
          <Link
            href=""
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <FaGithub className="text-lg" />
          </Link>
          <Link
            href=""
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <FaLinkedin className="text-lg" />
          </Link>
          <ThemeToggle />
        </div>
        <div className="flex lg:hidden">
          <div onClick={toggleMenu} className="cursor-pointer">
            <HiOutlineMenuAlt2 className="text-3xl hover:bg-zinc-200 dark:hover:bg-zinc-900 p-1 rounded-md" />
          </div>
        </div>

        {open && (
          <div className='fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden'>
            <div className="h-full w-[90%] bg-zinc-100 dark:bg-[#111]">
              <div onClick={toggleMenu} className='flex justify-end px-4 py-4'>
                <IoClose className='cursor-pointer text-3xl hover:bg-zinc-200 dark:hover:bg-zinc-900 p-1 rounded-md' />
              </div>
              <MobileNavigation />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;
