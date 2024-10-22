"use client";
import React from "react";
import { useTheme } from "@/components/context/ThemeContext";

const About = () => {
  const { isButton, theme, onThemeChange } = useTheme();
  return (
    <section
      className={`grid grid-cols-3 gap-4 h-screen w-screen  max-xl:grid-cols-2
           py-10 px-32
            overflow-auto   max-sm:grid-cols-1 ${theme.background} ${theme.text}  `}
    >
      About
    </section>
  );
};

export default About;
