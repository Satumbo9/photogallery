import React from "react";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
interface CardItemProps {
  id: number;
  text: string;
  h?: number;
  w?: number;
  url: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, text, url }) => {
  const { isButton, theme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center gap-10 cursor-pointer ${
        isButton ? "bg-white" : "bg-black"
      } p-5 rounded-md ${isButton ? "bg-opacity-5" : "bg-opacity-[2%]"} ${
        theme.text
      }`}
      key={id}
    >
      <motion.div
        whileTap={{
          opacity: 5,
          scale: 1.4,

          rotateZ: 0,
          // speed: 9,
        }}
        whileHover={{
          scale: 1.1,
          rotateZ: 4,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <Image
          priority
          className="h-60 w-80 rounded-md"
          src={url}
          alt={text}
          width={400}
          height={300}
        />
      </motion.div>
      <p
        className={`text-xl font-bold uppercase ${
          isButton ? " " : "text-gray-700"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CardItem;
