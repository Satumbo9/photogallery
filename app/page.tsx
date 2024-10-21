import React from "react";
import ThemeContextProvider from "@/components/context/ThemeContext";
import Home from "./Home/page";
import Footer from "@/components/ui/Footer";

function page() {
  return (
    <main className="size-full">
      <ThemeContextProvider>
        
        <Home />
        <Footer />
      </ThemeContextProvider>
    </main>
  );
}

export default page;
