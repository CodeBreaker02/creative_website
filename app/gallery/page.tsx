"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import useDimension from "@/app/hooks/useDimension";

interface ColumnProps {
  images: string[];
  y?: MotionValue<number>;
  className?: string;
}
const images = [
  "s1.jpg",
  "s2.jpg",
  "s3.jpg",
  "s4.jpg",
  "s5.jpg",
  "s6.jpg",
  "s7.jpg",
  "s8.jpg",
  "s9.jpg",
  "s10.jpg",
  "s11.jpg",
  "s12.jpg",
];

export default function GalleryPage() {
  const container = useRef(null);
  const { height } = useDimension();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.2]);

  return (
    <main className="scroll-smooth bg-black" ref={container}>
      <div className="h-screen text-white flex items-center justify-center text-3xl md:text-[4em] font-black font-clash p-4 md:p-16">
        Lonely
      </div>
      <div className="h-[175vh] bg-black flex flex-col md:flex-row gap-[2vw] box-border overflow-hidden">
        <Column
          images={[images[0], images[1], images[2]]}
          y={y}
          className="-top-[55%]"
        />
        <Column
          images={[images[6], images[7], images[8]]}
          y={y2}
          className="-top-[75%]"
        />
        <Column
          images={[images[9], images[10], images[11]]}
          y={y}
          className="-top-[55%]"
        />
      </div>
      <div className="h-screen text-white flex items-center justify-center text-3xl md:text-[4em] font-black font-clash p-4 md:p-16">
        All images are generated by AI
      </div>
    </main>
  );
}

const Column: React.FC<ColumnProps> = ({ images, y = 0, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <motion.div
      className={`w-full flex flex-col gap-6 relative ${className}`}
      style={{ y }}
      ref={containerRef}
    >
      {images.map((src, i) => (
        <motion.div
          key={i}
          className="relative w-full h-full overflow-hidden"
          style={{
            rotateY: useTransform(scrollYProgress, [0, 1], [0, 10]),
            rotateX: useTransform(scrollYProgress, [0, 1], [0, -20]),
            perspective: 1000,
          }}
        >
          <Image
            src={`/gallery/${src}`}
            alt="image"
            layout="fill"
            className="object-cover"
          />
        </motion.div>
      ))}
    </motion.div>
  );
};
