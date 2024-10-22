"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";

const HeaderPage = () => {
  const BfaceTitileRef = useRef<HTMLParagraphElement>(null);
  const { isButton, theme, onThemeChange } = useTheme();

  const animate = () => {
    if (BfaceTitileRef.current) {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.7,
          opacity: 0,
        },
      });

      tl.set(BfaceTitileRef, {
        opacity: 0,
      });

      tl.to(BfaceTitileRef.current, {
        scale: 2,
        opacity: 1,
      });
    }
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <section
      className={`flex flex-col items-center justify-between gap-2 ${theme.background} ${theme.text}`}
    >
      <p
        className="text-5xl w-40 text-center flex items-center justify-center h-20 font-bold"
        // whileInView={isTitleAnimated ? { scale: 2 } : { scale: 1 }}
        //           className={`text-5xl max-sm:text-2xl font-bold `}
      >
        BFaces
      </p>
      <p
        className="text-2xl w-40 text-center flex items-center justify-center h-20"
        // whileInView={isTitleAnimated ? { scale: 2 } : { scale: 1 }}
        //           className={`text-5xl max-sm:text-2xl font-bold `}
      >
        Magazine
      </p>

      <p
        className={`max-w-lg text-center text-sm ${
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
        className={`text-4xl mb-10 mt-5 flex items-center justify-center gap-10 rounded-md    ${theme.text}`}
      >
        <FaMoon style={{ width: 40, height: 40 }} />
      </motion.button>
    </section>
  );
};

export default HeaderPage;
