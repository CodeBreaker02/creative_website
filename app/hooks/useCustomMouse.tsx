import React, { useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";

export function useCustomMouse(ref: React.RefObject<any>) {
  const [mouseXPosition, setMouseXPosition] = useState<number | null>(null);
  const [mouseYPosition, setMouseYPosition] = useState<number | null>(null);

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    if (mouse.x !== null) {
      setMouseXPosition(mouse.clientX);
    }

    if (mouse.y !== null) {
      setMouseYPosition(mouse.clientY);
    }
  }, [mouse]);

  return { mouseXPosition, mouseYPosition };
}

export function useCustomCursor() {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  const mouseEnter = (text: string, variant: string) => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  const mouseLeave = (text: string, variant: string) => {
    setCursorText(text);
    setCursorVariant(variant);
  };

  return { cursorVariant, cursorText, mouseEnter, mouseLeave };
}
