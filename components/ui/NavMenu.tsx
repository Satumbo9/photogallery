import React from "react";
import { TfiGallery } from "react-icons/tfi";
import { SlFire } from "react-icons/sl";
import { SiAboutdotme } from "react-icons/si";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const NavMenu = () => {
  const [TopicMenu, setTopicMenu] = useState(["Top", "Fire", "About"]);
  const [isTopicSelected, setIsTopicSelected] = useState<boolean>(false);
  const { isButton, theme, onThemeChange } = useTheme();
  return (
    <div className={`flex gap-48   ${theme.text}`}>
      {/* {TopicMenu.map((items) => {
        return (
          <p
            className={` font-bold cursor-pointer ${
              isButton ? "hover:text-red-500" : "hover:text-sky-500"
            }  h-10 w-20 mb-10 flex items-center justify-center  text-xl`}
          >
            {items === "Top" ? (
              <TfiGallery style={{ width: 30, height: 30 }} />
            ) : null}
            {items === "Fire" ? (
              <SlFire style={{ width: 30, height: 30 }} />
            ) : null}
            {items === "About" ? (
              <SiAboutdotme style={{ width: 30, height: 30 }} />
            ) : null}
          </p>
        );
      })} */}
    </div>
  );
};

export default NavMenu;
