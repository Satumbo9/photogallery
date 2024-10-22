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
      className={`flex flex-col  items-center cursor-pointer  p-10  justify-center ${theme.text}`}
      key={id}
    >
      <motion.div
        // whileTap={{
        //   opacity: 5,
        //   scale: 1.4,
        //   rotateZ: 0,
        //   y: 30,
        //   // speed: 9,
        // }}
        whileHover={{
          scale: 1.1,
          rotateZ: 2,
          y: -20,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
        }}
      >
        <Image
          priority
          className="rounded-md w-full shadow-md	 "
          src={url}
          alt={text}
          width={400}
          height={300}
        />
      </motion.div>
      {/* <p
        className={`text-xl mt-4 font-semibold  ${
          isButton ? " " : "text-gray-700"
        }`}
      >
        {text}
      </p> */}
    </div>
  );
};

export default CardItem;
