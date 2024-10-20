"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer
      className={`h-40 bg-gradient-to-r from-cyan-500 to-blue-500 gap-5 text-white flex items-center justify-center text-2xl ${theme.background} ${theme.text}`}
    >
      <p>All the images from:</p>
      <Link
        className="text-black hover:text-white"
        target="_blank"
        href="https://www.pexels.com/"
      >
        Pexels
      </Link>
    </footer>
  );
};

export default Footer;
