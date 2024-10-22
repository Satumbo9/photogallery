"use client";

import React from "react";
import { useTheme } from "../context/ThemeContext";
import { RiInstagramFill } from "react-icons/ri";
import { TbBrandTiktokFilled } from "react-icons/tb";
import { CgPexels } from "react-icons/cg";

import Link from "next/link";

const Footer = () => {
  const { isButton, theme } = useTheme();
  return (
    <footer
      className={`h-40  flex flex-col gap-5 items-center justify-center text-2xl ${theme.text} ${theme.background}`}
    >
      <div>
        <p className={`font-bold ${isButton ? "text-red-500" : null}`}>
          Follow Us on Social Media
        </p>
      </div>
      <div className="flex gap-10">
        <Link
          className={`${theme.text} hover:text-red-500`}
          target="_blank"
          href="https://www.pexels.com/"
        >
          <RiInstagramFill style={{ width: 60, height: 60 }} />
        </Link>
        <Link
          className={`${theme.text} hover:text-red-500`}
          target="_blank"
          href="https://www.pexels.com/"
        >
          <TbBrandTiktokFilled style={{ width: 60, height: 60 }} />
        </Link>
        <Link
          className={`${theme.text} hover:text-red-500`}
          target="_blank"
          href="https://www.pexels.com/"
        >
          <CgPexels style={{ width: 60, height: 60 }} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
