"use client";

import React, { useEffect } from "react";
import { useState, createContext, useContext } from "react";

interface ThemeType {
  text: string;
  background: string;
  button: string;
}

interface ThemeContextType {
  isButton: boolean;
  theme: {
    text: string;
    background: string;
    button: string;
  };
  onThemeChange: () => void;
}

const ThemeDefaultValues = {
  isButton: false,
  theme: {
    text: "",
    background: "",
    button: "",
  },
  onThemeChange: () => {},
};

// 1 - Creating the context
const ContextTheme = createContext<ThemeContextType>(ThemeDefaultValues);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // 2 - Creating the states for the theme
  const [theme, setTheme] = useState<ThemeType>({
    text: "",
    background: "",
    button: "",
  });

  // 3 - Creating Button Clicked event
  const [isButton, setIsButton] = useState(false);

  useEffect(() => {}, [theme]);

  //Creating the ThemeChange function
  const onThemeChange = () => {
    console.log("onThemeChange working!!!");
    setTheme((prev) => {
      if (prev.background === "") {
        setIsButton(true);
        return {
          text: "text-white",
          background: "bg-black",
          button: "bg-gradient-to-r from-cyan-500 to-blue-500",
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
    <ContextTheme.Provider value={{ isButton, theme, onThemeChange }}>
      {children}
    </ContextTheme.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  return useContext(ContextTheme);
};
