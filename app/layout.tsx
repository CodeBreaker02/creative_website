import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import React from "react";

const clashGrotesk = localFont({
  variable: "--clash-grotesk-font",
  display: "swap",
  src: [
    {
      path: "fonts/ClashGrotesk-Variable.ttf",
      weight: "variable",
    },
  ],
});

const ranade = localFont({
  variable: "--ranade-font",
  display: "swap",
  src: [
    {
      path: "fonts/Ranade-Variable.ttf",
      weight: "variable",
    },
  ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${clashGrotesk.className}`}>{children}</body>
    </html>
  );
}
