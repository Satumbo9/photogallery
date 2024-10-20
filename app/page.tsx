import React from "react";
import ThemeContextProvider from "@/components/context/ThemeContext";
import Home from "./Home/page";

function page() {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  );
}

export default page;
