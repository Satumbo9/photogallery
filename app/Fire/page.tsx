"use client";

import React, { useState, useMemo } from "react";

import { imageGallery } from "@/components/data/data";
import { useEffect, useRef } from "react";
import CardItem from "@/components/ui/CardItem";
import { useTheme } from "@/components/context/ThemeContext";
import gsap from "gsap";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

//ShuffleArray

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Fire = () => {
  interface GalleryItems {
    id: number;
    text: string;
    url: string;
  }
  const { isButton, theme, onThemeChange } = useTheme();

  const [shuffleItems, setShuffleItems] = useState<GalleryItems[]>([]);
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

  //useEffect
  useEffect(() => {
    setShuffleItems(shuffleArray([...imageGallery])),
      // console.log("Animation State: ", isTitleAnimated);
      animate();
  }, []);
  return (
    <div
      // ref={imageRef}
      className={`grid grid-cols-3 p-10 gap-10 min-h-screen  max-xl:grid-cols-2 
          
            overflow-auto   max-sm:grid-cols-1 ${theme.background} ${theme.text}  `}
    >
      {shuffleItems.map((items, i) => {
        return (
          <CardItem
            key={items.id}
            id={items.id}
            text={items.text}
            url={items.url}
            h={500}
            w={500}
          />
        );
      })}
    </div>
  );
};
export default Fire;
