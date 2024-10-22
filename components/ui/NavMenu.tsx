"use client";

import React from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlFire } from "react-icons/sl";
import { SiAboutdotme } from "react-icons/si";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { usePathname } from "next/navigation";
import { NavMenuLinks } from "../data/data";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

import { RiFireFill } from "react-icons/ri";

import Link from "next/link";

const NavMenu = () => {
  const { isButton, theme, onThemeChange } = useTheme();
  const pathname = usePathname();
  return (
    <nav
      className={`flex flex-col border-opacity-5 w-30 p-2 gap-40  py-20 fixed  h-screen ${
        isButton
          ? "border-r-[1px] border-gray-200"
          : "border-r-[1px] border-gray-200 border-opacity-50"
      }  ${theme.text} ${isButton ? theme.background : "bg-white"}`}
    >
      {NavMenuLinks.map((items) => {
        return (
          <div
            key={items.id}
            className={` font-bold cursor-pointer ${
              isButton ? "hover:text-red-300" : "hover:text-red-300 "
            }  h-10 w-20 flex items-center justify-center  text-xl`}
          >
            {items.text === "Top" ? (
              <motion.div
                whileTap={{
                  scale: 2,
                }}
                className=" w-20 flex items-center justify-center"
              >
                <Link
                  className={` py-5 px-10 ${
                    items.route === pathname ? "text-red-500" : null
                  }`}
                  href={items.route}
                >
                  <TfiGallery style={{ width: 40, height: 40 }} />
                </Link>
              </motion.div>
            ) : null}
            {items.text === "Fire" ? (
              <motion.div
                whileTap={{
                  scale: 2,
                }}
                className=" w-20 flex items-center justify-center"
              >
                <Link
                  className={` py-5 px-10 ${
                    items.route === pathname ? "text-red-500" : null
                  }`}
                  href={items.route}
                >
                  <RiFireFill style={{ width: 40, height: 40 }} />
                </Link>
              </motion.div>
            ) : null}
            {items.text === "About" ? (
              <motion.div
                whileTap={{
                  scale: 2,
                }}
                className=" w-20 flex items-center justify-center"
              >
                <Link
                  className={` py-5 px-10 ${
                    items.route === pathname ? "text-red-500" : null
                  }`}
                  href={items.route}
                >
                  <FaHeart style={{ width: 40, height: 40 }} />
                </Link>
              </motion.div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
};

export default NavMenu;
