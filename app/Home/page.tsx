"use client";

import { imageGallery } from "@/components/data/data";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "@/components/context/ThemeContext";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import TopPics from "../Top/TopPics";
import NavMenu from "@/components/ui/NavMenu";

export default function Home() {
  const { isButton, theme, onThemeChange } = useTheme();
  // const [isTitleAnimated, setIsTitleAnimated] = useState<boolean>(false);

  const imageRef = useRef<HTMLDivElement>(null);
  const BfaceTitileRef = useRef<HTMLParagraphElement>(null);

  const animate = () => {
    if (imageRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 0.7, rotateZ: 0 } });

      tl.to(imageRef.current, {
        scale: 1.04,
      });

      tl.to(imageRef.current, {
        scale: 1,
      });
    }
    if (BfaceTitileRef.current) {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, opacity: 0 },
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
    // console.log("Animation State: ", isTitleAnimated);
    animate();
  }, []);
  return (
    <section
      className={`flex  flex-col  items-center  gap-10  ${theme.background} ${theme.text}`}
    >
      <div className="h-fit w-[700px]  flex flex-col items-center">
        <p
          ref={BfaceTitileRef}
          // whileInView={isTitleAnimated ? { scale: 2 } : { scale: 1 }}

          className={`text-5xl max-sm:text-2xl font-bold mb-10 mt-16`}
        >
          BFaces
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
      </div>
      <motion.button
        whileHover={{
          scale: 1.2,
        }}
        onClick={onThemeChange}
        className={`bg-black text-4xl flex items-center justify-center rounded-md h-10 w-40 text-white ${theme.button} ${theme.text}`}
      >
        <FaMoon style={{ width: 20, height: 20 }} />
      </motion.button>

      {/* The  Sub memnu */}
      <NavMenu />
      <TopPics ref={imageRef} />
    </section>
  );
}
