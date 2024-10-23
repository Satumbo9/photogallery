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
      <div className="mt-28 flex items-center min-h-screen w-screen justify-center">
        <RenderForms name="Register" />
      </div>
    </section>
  );
};

export default About;
