"use client";
// @ts-ignore
import { ReactLenis } from "@studio-freight/react-lenis";
import React from "react";

function SmoothScrolling({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 0.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
