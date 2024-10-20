import React from "react";
import ThemeContextProvider from "@/components/context/ThemeContext";
import Home from "./Home/page";
import Footer from "@/components/ui/Footer";

function page() {
  return (
    <ThemeContextProvider>
      <Home />
      <Footer />
    </ThemeContextProvider>
  );
}

export default page;
