import { p } from "framer-motion/client";
import React from "react";
import { useTheme } from "../context/ThemeContext";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  id?: string;
  label?: string;
  type?: string;
  placeHolder?: string;
  className?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type, placeHolder, className, ...props }, ref) => {
    const { theme, isButton } = useTheme();

    return (
      <div className=" w-2/4">
        <input
          ref={ref}
          type="text"
          className={` ${className} w-full p-5 h-10 border text-black`}
          typeof={type}
          {...props}
          placeholder={placeHolder}
        />
      </div>
    );
  }
);
export default Input;
