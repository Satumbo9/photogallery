import React, { forwardRef } from "react";
import { useTheme } from "../context/ThemeContext";

interface ButtomProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
  type: any;
}

const Buttom = forwardRef<HTMLButtonElement, ButtomProps>(
  ({ label, className, type }, ref) => {
    {
      const { isButton, theme } = useTheme();
      return (
        <button
          className={`font-bold  rounded-md w-40 h-10 ${
            theme.button
          } ${className} ${theme.text} ${
            isButton ? null : "border  text-white bg-black "
          }   flex items-center text-xl  justify-center`}
        >
          {label}
        </button>
      );
    }
  }
);

export default Buttom;
