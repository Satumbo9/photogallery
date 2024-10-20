"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { isButton, theme } = useTheme();
  return (
    <footer
      className={`h-40 bg-black gap-5 text-white flex items-center justify-center text-2xl ${theme.text}`}
    >
      <p className="font-bold ">All the images from:</p>
      <Link
        className="text-white hover:text-red-500"
        target="_blank"
        href="https://www.pexels.com/"
      >
        Pexels
      </Link>
    </footer>
  );
};

export default Footer;
