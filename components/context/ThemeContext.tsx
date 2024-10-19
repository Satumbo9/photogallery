import React from "react";
import { useState, useEffect, createContext, useContext } from "react";

// 1 - Creating the context
const contextTheme = createContext(null);

const ThemeContext = () => {
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
        return {
          text: "text-white",
          background: "bg-black",
          button: "bg-sky-500",
        };
      } else {
        return {
          text: "",
          background: "",
          button: "",
        };
      }
    });
  };
  return <div>ThemeContext</div>;
};

export default ThemeContext;
