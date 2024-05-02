"use client";

import { motion } from "framer-motion";
import { FC } from "react";

const Page: FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-hidden">
      {/* Navbar Section */}
      <div className="w-full py-4 px-8 bg-gray-800 text-white text-lg">
        <nav className="flex justify-between items-center">
          <div>Logo</div>
          <div>
            <a href="#home" className="px-4">
              Home
            </a>
            <a href="#about" className="px-4">
              About
            </a>
            <a href="#contact" className="px-4">
              Contact
            </a>
          </div>
        </nav>
      </div>

      <section className="color-10">
        <nav className=" flex">
          <ul className="menu align-center expanded text-center SMN_effect-31">
            <li>
              <a href="" data-hover="Home">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="" data-hover="About">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="" data-hover="Gallery">
                <span>Gallery</span>
              </a>
            </li>
            <li>
              <a href="" data-hover="Notes">
                <span>Notes</span>
              </a>
            </li>
            <li>
              <a href="" data-hover="Contact">
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Big Text Section */}
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-700 text-white">
        <h1 className="text-6xl font-bold">Explore the New Collection</h1>
      </div>

      {/* Image Section with Framer Motion */}
      <motion.div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center w-screen"
        style={{
          backgroundImage:
            'url("https://cdn.sanity.io/images/7hnw2swn/production/99d9d713b2e90c43b5aabca691ef83892100dbcd-7852x5237.jpg?rect=0,411,7852,4417&amp;w=640&amp;h=360&amp;q=75&amp;fit=crop&amp;auto=format%20640w,")',
        }}
      >
        <div className="text-center p-20">
          <h1 className="text-5xl uppercase text-white font-bold mb-4">
            #Pharrell&apos;s LV FW24 collection
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Page;
