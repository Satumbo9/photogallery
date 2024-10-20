"use client";

import { imageGallery } from "@/components/data/data";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "@/components/context/ThemeContext";
import CardItem from "@/components/ui/CardItem";
import { motion } from "framer-motion";

export default function Home() {
  const { theme, onThemeChange } = useTheme();
  return (
    <div
      className={`flex flex-col size-full items-center justify-center gap-10 ${theme.background} ${theme.text}`}
    >
      <p className={`text-9xl max-md:text-6xl`}>Photo Gallery</p>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        onClick={onThemeChange}
        className={`bg-black text-4xl flex items-center justify-center rounded-md h-10 w-40 text-white ${theme.button} ${theme.text}`}
      >
        <FaMoon style={{ width: 20, height: 20 }} />
      </motion.button>
      <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 max-sm:grid-cols-1">
        {imageGallery.map((items) => {
          return (
            <CardItem
              key={items.id}
              id={items.id}
              text={items.text}
              url={items.url}
              h={400}
              w={400}
            />
          );
        })}
      </div>
    </div>
  );
}
