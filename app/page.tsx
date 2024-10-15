"use client";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function HomePage() {
  const controls = useAnimation();
  const [sectionsData, setSectionsData] = useState([
    {
      id: "section1",
      bgcolor: "#352313",
      textcolor: "#ffffff",
      title: "Art of Portrait Photography: Capturing the Soul",
      text: "Explore the depth of human expression through the lens. Learn how to use color, contrast, and composition to create not just a photograph, but a story that speaks without words.",
      imageUrl:
        "https://i.pinimg.com/564x/f9/ce/8a/f9ce8a7f67d027bb1018937c840b55b7.jpg",
      alignRight: false,
    },
    {
      id: "section2",
      bgcolor: "#712b2b",
      textcolor: "#ffffff",
      title: "Dramatic Fashion in Nature: A Dance with the Elements",
      text: "Where the elegance of fashion meets the raw beauty of nature. Discover how to harness the wind, light, and landscape to create stunning visual narratives that elevate clothing to art.",
      imageUrl:
        "https://i.pinimg.com/564x/27/d0/6d/27d06d6b43e6829e75b9a151064f3de1.jpg",
      alignRight: true,
    },
    {
      id: "section3",
      bgcolor: "#ececec",
      textcolor: "#000000",
      title: "Capturing Movement: The Vitality of Life in Photography",
      text: "Freeze the essence of motion and emotion in a single frame. Learn how to create lively, moving portraits that embody the spirit of freedom and the dance of life against the vast canvas of nature.",
      imageUrl:
        "https://i.pinimg.com/564x/31/e4/7f/31e47f13a8f84971aa7f67c55d14f7a3.jpg",
      alignRight: false,
    },
    {
      id: "section4",
      bgcolor: "#1e1e1e",
      textcolor: "#ffffff",
      title: "Urban Elegance: The Intersection of Fashion and Environment",
      text: "Discover how the urban landscape can serve as a canvas for the sophisticated portrayal of personal style and expression. Dive into the nuances of environmental portraiture set against the city's textured backdrop.",
      imageUrl:
        "https://i.pinimg.com/564x/bb/be/e3/bbbee332127e2b6b767f3ca53b2226d8.jpg",
      alignRight: true,
    },
  ]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const callback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          controls.start({
            backgroundColor: entry.target.getAttribute("data-bgcolor"),
            color: entry.target.getAttribute("data-textcolor"),
          });
        }
      });
    };

    let observer = new IntersectionObserver(callback, { threshold: 0.4 });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [controls]);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      initial={{ backgroundColor: "#ffffff", color: "#000000" }}
      animate={controls}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {sectionsData.map(
        ({ id, bgcolor, textcolor, title, text, imageUrl, alignRight }) => (
          <section
            key={id}
            id={id}
            data-bgcolor={bgcolor}
            data-textcolor={textcolor}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-20"
          >
            <div
              className={`w-full md:w-1/2 md:px-12 py-8 ${
                alignRight ? "md:order-last" : ""
              }`}
            >
              <motion.div
                animate={floatingAnimation}
                className="w-full h-full flex items-center justify-center"
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="max-w-[500px] h-auto rounded-2xl shadow-lg w-full"
                />
              </motion.div>
            </div>
            <div
              className="w-full md:w-1/2 px-4 md:px-12 py-8"
              style={{ color: textcolor }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
              <p className="mt-4 text-sm md:text-base">{text}</p>
            </div>
          </section>
        ),
      )}
    </motion.div>
  );
}
