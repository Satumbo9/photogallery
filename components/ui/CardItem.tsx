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
      className={`flex flex-col items-center gap-5 cursor-pointer ${
        isButton ? "bg-white" : null
      } p-5 rounded-md ${isButton ? "bg-opacity-5" : null} ${theme.text}`}
      key={id}
    >
      <motion.div
        whileTap={{
          opacity: 0.34,
        }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
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
      <p className={`text-2xl font-bold `}>{text}</p>
    </div>
  );
};

export default CardItem;
