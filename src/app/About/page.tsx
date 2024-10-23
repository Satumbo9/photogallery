"use client";
import React from "react";
import { useTheme } from "@/components/context/ThemeContext";
import RenderForms from "@/components/ui/Forms";

const About = () => {
  const { isButton, theme, onThemeChange } = useTheme();
  return (
    <section
      className={` flex min-h-screen ${theme.background} ${theme.text}  `}
    >
      {/* <RenderForms name="Register" /> */}
    </section>
  );
};

export default About;
