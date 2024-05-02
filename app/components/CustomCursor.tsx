import React from "react";
import { motion } from "framer-motion";

interface CustomCursorProps {
  cursorText: string;
  cursorVariant: string;
  mouseXPosition: number | null;
  mouseYPosition: number | null;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorText,
  cursorVariant,
  mouseXPosition,
  mouseYPosition,
}) => {
  const variants = {
    default: {
      opacity: 1,
      height: 20,
      width: 20,
      fontSize: "16px",
      backgroundColor: "whitesmoke",
      mixBlendMode: "difference",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    play: {
      opacity: 1,
      height: 30,
      width: 60,
      fontSize: "14px",
      textTransform: "uppercase",
      textColor: "white",
      backgroundColor: "#E9C168",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    talk: {
      opacity: 1,
      height: 30,
      width: 90,
      fontSize: "14px",
      textTransform: "uppercase",
      textColor: "white",
      backgroundColor: "#E9C168",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    article: {
      opacity: 1,
      backgroundColor: "base",
      color: "#000",
      height: 128,
      width: 128,
      fontSize: "32px",
      x: mouseXPosition !== null ? mouseXPosition - 48 : 0,
      y: mouseYPosition !== null ? mouseYPosition - 48 : 0,
    },
    image: {
      opacity: 1,
      height: "5rem", // Set the height as needed
      width: "5rem", // Set the width as needed
      backgroundColor: "#fff",
      x: mouseXPosition,
      y: mouseYPosition,
      backgroundImage: "url('ian_tradi.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "9999px", // for rounded image
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  };

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return (
    <motion.div
      // @ts-ignore
      variants={variants}
      className="circle custom_mouse"
      animate={cursorVariant}
      transition={spring}
    >
      <span className="cursorText font-clash z-50 ">{cursorText}</span>
    </motion.div>
  );
};

export default CustomCursor;
