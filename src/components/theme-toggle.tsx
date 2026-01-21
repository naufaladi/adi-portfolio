"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);
  const [meh, setMeh] = useState("null");

  useEffect(() => {
    setIsClient(true);
  }, []);

  // return (
  //   <h1>
  //     {isClient && "This is never prerendered"}
  //     {/* {isClient ? "This is never prerendered" : "PRERERENDENDNENDENDNENDNEDN"} */}
  //   </h1>
  // );

  return (
    <button
      className="px-4 py-2 border border-white relative z-50"
      onClick={() => {
        setTheme(theme == "dark" ? "light" : "dark");
      }}
    >
      Switch theme
    </button>
  );
}
