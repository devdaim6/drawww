"use client";
import React from "react";
import "@/styles/toggleTheme.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiSun } from "react-icons/bi";
import { FaRegMoon } from "react-icons/fa";
import { useRouter } from "next/navigation";
const ToggleThemeButton = () => {
  const router=useRouter()
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
 
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className="theme-container shadow-dark"
        onClick={() =>{
          theme === "dark" ? setTheme("light") : setTheme("dark")
        
        }
        }
      >
        <p>
          {theme === "light" ? (
            <FaRegMoon size={22} color={theme === "light" ? "black":'white'} />
          ) : (
            <BiSun size={26} />
          )}
        </p>
      </div>
    </>
  );
};

export default ToggleThemeButton;
