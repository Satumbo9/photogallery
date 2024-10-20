"use client";

import { imageGallery } from "@/components/data/data";
import { FaMoon } from "react-icons/fa";

import { useTheme } from "@/components/context/ThemeContext";
import CardItem from "@/components/ui/CardItem";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const { isButton, theme, onThemeChange } = useTheme();
  // const [isTitleAnimated, setIsTitleAnimated] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);
  const BfaceTitileRef = useRef<HTMLParagraphElement>(null);

  const animate = () => {
    if (imageRef.current) {
      const tl = gsap.timeline({ defaults: { duration: 0.7, rotateZ: 0 } });

      tl.to(imageRef.current, {
        rotateZ: 4,
      });

      tl.to(imageRef.current, {
        rotateZ: 0,
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
      className={`flex  flex-col size-full  items-center justify-center gap-10  ${theme.background} ${theme.text}`}
    >
      <div className="h-fit w-[700px]  flex flex-col items-center">
        <p
          ref={BfaceTitileRef}
          // whileInView={isTitleAnimated ? { scale: 2 } : { scale: 1 }}
          // transition={{ duration: 0.6 }}
          className={`text-5xl max-sm:text-2xl font-bold mb-10 mt-16`}
          // onViewportEnter={() => {
          //   if (!isTitleAnimated) {
          //     console.log("Title Aanimated! ", isTitleAnimated);
          //     setIsTitleAnimated(true);
          //   }
          //   console.log("Title Aanimated! ", isTitleAnimated);
          // }}
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
        // transition={{ duration: 1, delay: 1 }}

        onClick={onThemeChange}
        className={`bg-black text-4xl flex items-center justify-center rounded-md h-10 w-40 text-white ${theme.button} ${theme.text}`}
      >
        <FaMoon style={{ width: 20, height: 20 }} />
      </motion.button>
      <div
        ref={imageRef}
        className="grid grid-cols-3 gap-4 max-xl:grid-cols-2 mb-16 max-sm:grid-cols-1"
      >
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
