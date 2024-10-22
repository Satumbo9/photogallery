"use client";

import React from "react"; // ,{ useState, useMemo }
import { imageGallery } from "@/components/data/data";
import { useEffect, useRef } from "react";
import CardItem from "@/components/ui/CardItem";
import { useTheme } from "@/components/context/ThemeContext";
import gsap from "gsap";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface GalleryItems {
  id: number;
  text: string;
  url: string;
}

//ShuffleArray

// function shuffleArray<T>(array: T[]): T[] {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

const TopPics = () => {
  // const shuffleItems = useMemo(
  //   () => shuffleArray([...imageGallery]),
  //   [imageGallery]
  // );

  const { isButton, theme, onThemeChange } = useTheme();
  // const [isTitleAnimated, setIsTitleAnimated] = useState<boolean>(false);
  const imageRef = useRef<HTMLDivElement>(null);
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
  };
  useEffect(() => {
    // console.log("Animation State: ", isTitleAnimated);
    animate();
  }, []);

  return (
    <section
      // ref={imageRef}
      className={`grid grid-cols-3 gap-4  max-xl:grid-cols-2
           py-10 px-32
            overflow-auto   max-sm:grid-cols-1 ${theme.background} ${theme.text} h-screen w-screen  `}
    ></section>
  );
};
export default TopPics;
