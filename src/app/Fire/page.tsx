"use client";

import React, { useState, useMemo } from "react";

import { imageGallery } from "@/components/data/data";
import { useEffect, useRef } from "react";
import CardItem from "@/components/ui/CardItem";
import { useTheme } from "@/components/context/ThemeContext";
import Footer from "@/components/ui/Footer";
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
    <section
      className={`flex items-center px-10 flex-col   ${theme.background} ${theme.text}`}
    >
      <div className=" flex flex-col items-center">
        <p className="flex items-center  mt-10 text-red-500 text-8xl font-bold">
          Top 30 Models
        </p>
        <p className="w-[800px]  max-lg:w-[400px]  text-center mt-5 max-sm:text-lg ">
          Discover the elite of the modeling world. Our curated list of the Top
          30 Models showcases the most sought-after talent, celebrated for their
          exceptional skills, versatility, and captivating presence. From runway
          to editorial, these models are at the forefront of fashion,
          influencing trends and inspiring creativity.
        </p>
        <div
          // ref={imageRef}
          className={`grid mr-10 ml-10 grid-cols-3 gap-10 p-10 min-h-screen  max-xl:grid-cols-2
                              
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
        <p className={`w-[800px] text-center mt-5 `}>
          Partner with us to elevate your brand with top-tier modeling talent.
          If you’re seeking a professional model for your upcoming campaign,
          event, or project, our agency is here to help. We represent a diverse
          roster of experienced models who are ready to bring your vision to
          life. For inquiries, please reach out to us directly. Our team is
          dedicated to matching you with the ideal model that aligns with your
          brand's aesthetic and goals. Let’s collaborate to create something
          extraordinary.
        </p>
      </div>
      <Footer />
    </section>
  );
};
export default Fire;
