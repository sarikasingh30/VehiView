"use client";
import Image from "next/image";
import { customButtonProps } from "../types";

const CustomButton = ({title, btnType, containerStyles,handleClick}:customButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType||"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default CustomButton;
