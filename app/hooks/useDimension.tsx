"use client";
import { useEffect, useState } from "react";

const useDimension = () => {
  const [dimension, setDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial dimensions on mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimension;
};

export default useDimension;
