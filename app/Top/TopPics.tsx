"use client";

import React, { useState, useMemo } from "react";
import { imageGallery } from "@/components/data/data";
import { useEffect } from "react";
import CardItem from "@/components/ui/CardItem";
import { p } from "framer-motion/client";

interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface GalleryItems {
  id: number;
  text: string;
  url: string;
}

//ShuffleArray

function shuffleArray<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const TopPics = React.forwardRef<HTMLDivElement, GalleryProps>(
  ({ className = "", ...props }, ref) => {
    const shuffleItems = useMemo(
      () => shuffleArray([...imageGallery]),
      [imageGallery]
    );

    return (
      <div
        ref={ref}
        {...props}
        className={`grid grid-cols-3 gap-4  max-xl:grid-cols-2
           py-10 px-32
            overflow-auto  mb-16 max-sm:grid-cols-1  ${className}`}
      >
        {shuffleItems.map((items, i) => {
          return (
            <CardItem
              key={i}
              id={items.id}
              text={items.text}
              url={items.url}
              h={400}
              w={400}
            />
          );
        })}
      </div>
    );
  }
);

export default TopPics;
