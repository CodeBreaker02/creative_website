"use client";
import React, { useState, useEffect, useRef } from "react";
import { Briefcase, Menu, Plus, Search, User } from "lucide-react";
import { Logo } from "@/app/utils/svg";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  const animationProgress = Math.min(
    Number(scrollPosition > 1 / (window.innerHeight * 0.1)),
    1,
  );

  const calculateLogoScale = () => {
    const startScale = 0.8;
    const endScale = 0.05;
    return startScale - animationProgress * (startScale - endScale);
  };

  const calculateLogoTranslate = () => {
    const startPosition = 500;
    const endPosition = -7.5;
    return startPosition - animationProgress * (startPosition - endPosition);
  };

  const headerBgOpacity = animationProgress;

  const getLogoColor = () => {
    const r = 255 - Math.round(animationProgress * 255);
    const g = 255 - Math.round(animationProgress * 255);
    const b = 255 - Math.round(animationProgress * 255);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const getMenuItemColor = () => {
    const colorValue = 255 - Math.round(animationProgress * 255);
    return `rgb(${colorValue}, ${colorValue}, ${colorValue})`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <header
        className="w-full h-[72px] fixed top-0 left-0 z-10 transition-colors duration-300"
        style={{
          backgroundColor: `rgba(255, 255, 255, ${headerBgOpacity})`,
          color: getMenuItemColor(),
        }}
      >
        <div className="menu h-full mx-auto md:mx-[144px] flex justify-between items-center">
          <div className="menu-left-side flex gap-2 items-center">
            <Plus className="h-[16px] w-[16px]" />
            <h6>Nous Contacter</h6>
          </div>
          <div className="menu-right-side flex gap-[16px] items-center">
            <Briefcase className="h-[16px] w-[16px]" />
            <User className="h-[16px] w-[16px]" />
            <Search className="h-[16px] w-[16px]" />
            <div className="flex gap-2 items-center">
              <Menu className="h-[16px] w-[16px]" />
              <h6>MENU</h6>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-0 flex justify-center items-center transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            transform: `scale(${calculateLogoScale()}) translateY(${calculateLogoTranslate()}%)`,
            color: getLogoColor(),
          }}
        >
          <Logo className="w-[100vw]" />
        </div>
      </header>

      <section className="h-[100vh] relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://media.gucci.com/dynamic/b3c8/t_ii3zz3S4mArL6ZY5dUnNtTFM30E2Xss7l3JFRjeHnisKCkRv1JVPugAoiRsUxy+3AZfHt0Mv4PP_lAirOPffoXWsuCFgK8Bg4EwkTdtRxo9T1eUeFvCA3eRC7DveFr97NmwGLajQWamLMgDRk0jpyPJIuU+hmwXtCvXYaZWgGT3L4Vje9w6MBLfPJTQxqj9MtMmaxUuvqhlsG_MbCO3+BQJK64p8XjBh6tK5qr4zAF7JHYLrX72Yokmc+P6_OooNMXb1s8zvLrCb9Uonj25M183sjpWxm4FNbW08+hqryKyaaK0V+Ps+qxsnB_xRO+RzCcLxgDgHdVXru+BdCkK3y96FqqdfSUUwIBOxWKkK68WGs9hPrEr2PgdA+RJKpY1TWn4YfdkTxAX86ffbuzRGOsu_OeMQYpm9lsD_LOgww=/HP_Hero-FullBleed-Mobile_Gucci-MDAY-APR25-GUCCI-FESTIVITIES-ADV-KIM-COCO-A-0096_001_Default.png')",
          }}
        />
        <div className="absolute inset-0 bg-black opacity-30" />

        <div className="absolute bottom-5 w-full text-center text-white z-2">
          <h1 className="text-3xl mb-5">Mother's Day Gifts</h1>
          <button className="bg-white text-black px-8 py-3 font-bold text-sm hover:bg-gray-100 transition-colors">
            SHOP THE SELECTION
          </button>
        </div>
      </section>

      <section className="py-24 px-5 max-w-6xl mx-auto">
        <h2 className="text-2xl font-medium mb-5">Featured Collection</h2>
        <p className="mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
        </p>

        <h2 className="text-2xl font-medium mt-10 mb-5">New Arrivals</h2>
        <p className="mb-5 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui
          mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
        </p>
      </section>
    </div>
  );
}
