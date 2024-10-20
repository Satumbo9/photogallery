"use client";

import React from "react";
import { useState, createContext, useContext } from "react";

interface themeType {
  isButton: boolean;
  onThemeChange: () => void;
}

const themeDefaultValues = {
  isButton: false,
  onThemeChange: () => {},
};

// 1 - Creating the context
const ContextTheme = createContext<themeType>(themeDefaultValues);

const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  // 2 - Creating the states for the theme
  const [theme, setTheme] = useState({
    text: "",
    background: "",
    button: "",
  });

  // 3 - Creating Button Clicked event
  const [isButton, setIsButton] = useState(false);

  //Creating the ThemeChange function
  const onThemeChange = () => {
    setTheme((prev) => {
      if (prev.background === "") {
        setIsButton(true);
        return {
          text: "text-white",
          background: "bg-black",
          button: "bg-sky-500",
        };
      } else {
        setIsButton(false);
        return {
          text: "",
          background: "",
          button: "",
        };
      }
    });
  };
  return (
    <ContextTheme.Provider value={{ isButton, onThemeChange }}>
      {children}
    </ContextTheme.Provider>
  );
};

export default ThemeContext;

export const useTheme = () => {
  return useContext(ContextTheme);
};
