"use client";

import { imageGallery } from "@/components/data/data";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/context/ThemeContext";

export default function Home() {
  const { isButton, onThemeChange } = useTheme();

  return (
    <div className="flex flex-col items-center gap-10">
      <p className="text-9xl">Photo Gallery</p>

      <div className="grid grid-cols-3 gap-4">
        {imageGallery.map((items) => {
          return (
            <div className="flex flex-col items-center gap-5">
              <Image
                className="h-60 w-80"
                src={items.url}
                width={400}
                height={300}
                alt="hello"
              />
              <p className="text-2xl font-bold">{items.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
