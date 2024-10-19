"use client";

import React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  const { theme } = useTheme();

  return (
    <Link href='' className="flex items-center justify-center gap-1 w-fit hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-md px-2 py-1.5">
      {theme === "light" ? (
        <Image
          src="/logo/logo-light.png"
          alt=""
          width={20}
          height={20}
          className="object-cover max-md:w-[16px] max-md:h-[16px]"
        />
      ) : (
        <Image
          src="/logo/logo-dark.png"
          alt=""
          width={20}
          height={20}
          className="object-cover  max-md:w-[16px] max-md:h-[16px]"
        />
      )}
      <div className="flex items-center font-semibold text-sm lg:text-base font-poppins text-black dark:text-white">
        <h2 className="">code</h2>
        <h2 className="font-medium text-zinc-600 dark:text-zinc-300">Stash</h2>
        <h2 className="text-xs lg:text-sm">/ui</h2>
      </div>
    </Link>
  );
}

export default Logo;

{
  /**
<div className="relative w-[28px] h-[28px] flex items-center justify-center p-1">
        <Image
          src="/logo/hexagon-light.svg"
          alt=""
          width={28}
          height={28}
          className="absolute inset-0 object-cover"
        />
        <PiBracketsCurlyBold className="z-10 text-white" />
      </div>    
    
*/
}
