"use client";

import { imageGallery } from "@/components/data/data";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "@/components/context/ThemeContext";
import CardItem from "@/components/ui/CardItem";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const { isButton, theme, onThemeChange } = useTheme();
  const [isTitleAnimated, setIsTitleAnimated] = useState<boolean>(false);

  useEffect(() => {
    console.log("Animation State: ", isTitleAnimated);
  }, [isTitleAnimated]);
  return (
    <section
      className={`flex  flex-col size-full  items-center justify-center gap-10  ${theme.background} ${theme.text}`}
    >
      <motion.p
        whileInView={isTitleAnimated ? { scale: 2 } : { scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`text-5xl max-sm:text-2xl font-bold mb-10 mt-16`}
        onViewportEnter={() => {
          if (!isTitleAnimated) {
            console.log("Title Aanimated! ", isTitleAnimated);
            setIsTitleAnimated(true);
          }
          console.log("Title Aanimated! ", isTitleAnimated);
        }}
      >
        BeautifulFaces
      </motion.p>
      <p
        className={`max-w-lg text-center text-xl ${
          isButton ? " " : "text-gray-700"
        }`}
      >
        Explore the beauty of our world in stunning 4K resolution and embrace
        the belief that you are a part of this vibrant tapestry. Join us on a
        journey that celebrates the diverse landscapes, cultures, and moments
        that connect us all.
      </p>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        onClick={onThemeChange}
        className={`bg-black text-4xl flex items-center justify-center rounded-md h-10 w-40 text-white ${theme.button} ${theme.text}`}
      >
        <FaMoon style={{ width: 20, height: 20 }} />
      </motion.button>
      <div className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 mb-16 max-sm:grid-cols-1">
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
    </section>
  );
}
