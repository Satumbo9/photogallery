"use client";

import React from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlFire } from "react-icons/sl";
import { SiAboutdotme } from "react-icons/si";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { NavMenuLinks } from "../data/data";
import Link from "next/link";

const NavMenu = () => {
  const { isButton, theme, onThemeChange } = useTheme();
  return (
    <nav
      className={`flex gap-48 items-center justify-center p-5 ${theme.text} ${theme.background}`}
    >
      {NavMenuLinks.map((items) => {
        return (
          <p
            key={items.id}
            className={` font-bold cursor-pointer ${
              isButton ? "hover:text-red-500" : "hover:text-sky-500"
            }  h-10 w-20 flex items-center justify-center  text-xl`}
          >
            {items.text === "Top" ? (
              <Link className=" py-5 px-10" href={items.route}>
                <TfiGallery style={{ width: 30, height: 30 }} />
              </Link>
            ) : null}
            {items.text === "Fire" ? (
              <Link className=" py-5 px-10" href={items.route}>
                <SlFire style={{ width: 30, height: 30 }} />
              </Link>
            ) : null}
            {items.text === "About" ? (
              <Link className=" py-5 px-10" href={items.route}>
                <SiAboutdotme style={{ width: 30, height: 30 }} />
              </Link>
            ) : null}
          </p>
        );
      })}
    </nav>
  );
};

export default NavMenu;
