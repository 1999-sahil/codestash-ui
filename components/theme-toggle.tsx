"use client";

import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";
import { TiWeatherSunny } from "react-icons/ti";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensures that the component is only rendered on the client side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <button
      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <span className="text-black">
          <TiWeatherSunny className="text-lg" />
        </span> // Light mode icon
      ) : (
        <span className="text-white">
          <RiMoonClearFill className="text-lg" />
        </span> // Dark mode icon
      )}
    </button>
  );
}

export default ThemeToggle;
