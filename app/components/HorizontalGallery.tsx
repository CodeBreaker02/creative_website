import React, { useEffect, useRef } from "react";
import { motion, useTransform, useScroll, useAnimation } from "framer-motion";

const ParallaxCover = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
  return (
    <div className="flex justify-center items-center w-full h-full overflow-hidden -z-10">
      <motion.div
        className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center w-screen"
        style={{
          backgroundImage:
            'url("https://www.meetings.fr/wp-content/uploads/2024/07/Montage-JAV-2024-Mobilier-meetings-theatre-anthique-4.jpg")',
          scale,
        }}
      >
        <div className="text-center p-4 md:p-20">
          <h1 className="text-3xl md:text-5xl uppercase text-white font-bold mb-4">
            #Pharrell&apos;s LV FW24 collection
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const controls = useAnimation();
  const lastCardControls = useAnimation();
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-90%"]);

  useEffect(() => {
    scrollYProgress.onChange((value) => {
      if (value >= 0.95) {
        controls.start({ opacity: 1, y: 0 });
        lastCardControls.start({ scale: 1.6 });
      } else {
        controls.start({ opacity: 0, y: 0 });
        lastCardControls.start({ scale: 1 });
      }
    });
  }, [controls, lastCardControls, scrollYProgress]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden pl-4 md:pl-14">
        <motion.div style={{ x }} className="flex">
          {cards.map((card, index) => (
            <Card
              card={card}
              key={card.id}
              controls={
                index === cards.length - 1 ? lastCardControls : undefined
              }
            />
          ))}
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={controls}
        className="absolute bottom-[10%] right-[10%] text-base md:text-xl font-thin text-white w-full md:w-1/3 px-4 md:px-0 hidden md:block"
      >
        <motion.article
          initial={{ scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full p-6 md:p-6 rounded-lg text-gray-800 bg-white bg-opacity-90"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-4">
            The Elegance of Leisure
          </h2>
          <p className="text-sm md:text-base">
            Discover the epitome of relaxation and style with our latest
            collection. Featured here is an ensemble that seamlessly blends
            indoor comfort with a touch of sporting finesse. Our model, exuding
            confidence and poise, showcases a pair of delicate pale pink pants
            paired with a lustrous satin jacket, casually draped over the
            shoulders for an effortless look. Underneath, a vibrant green
            sweater harmonizes with the outdoors, accented by a silk neckerchief
            that punctuates the outfit with a pop of color.
          </p>
        </motion.article>
      </motion.div>
    </section>
  );
};

const Card = ({ card, controls }: { card: CardType; controls?: any }) => {
  return (
    <motion.div
      className="group relative overflow-hidden"
      style={{
        minWidth: "250px",
        minHeight: "375px",
        maxWidth: "300px",
        maxHeight: "450px",
      }}
      animate={controls}
    >
      <h4
        className="text-xs uppercase font-medium"
        style={{ opacity: controls ? 0 : 1 }}
      >
        {card.title}
      </h4>
      <span
        className="text-black text-xs uppercase font-thin me-2 px-2.5 py-0.5 mb-4 border border-black"
        style={{ opacity: controls ? 0 : 1 }}
      >
        LVOVERS
      </span>
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "contain",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
        className="absolute z-0 mt-4 transition-transform duration-300 group-hover:scale-105"
      ></div>
    </motion.div>
  );
};

const Example = () => {
  return (
    <div className="bg-white">
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <nav className="w-full md:flex-grow mb-4 md:mb-0">
            <ul className="flex justify-center md:justify-start space-x-4 md:space-x-6">
              <li>
                <a href="/new" className="hover:text-gray-500">
                  New
                </a>
              </li>
              <li>
                <a href="/men" className="hover:text-gray-500">
                  Men
                </a>
              </li>
              <li>
                <a href="/women" className="hover:text-gray-500">
                  Women
                </a>
              </li>
              <li>
                <a href="/collections" className="hover:text-gray-500">
                  Collections
                </a>
              </li>
            </ul>
          </nav>

          <div className="w-full md:flex-grow flex justify-center md:pr-40 mb-4 md:mb-0">
            <a
              href="/"
              className="text-2xl md:text-3xl uppercase text-black hover:text-gray-500"
            >
              Louis Vuitton
            </a>
          </div>

          <div className="w-full md:flex-grow flex justify-center md:justify-end items-center">
            <a href="/search" className="hover:text-gray-500 mr-4 md:mr-6">
              Search
            </a>
            <a href="/account" className="hover:text-gray-500">
              Account
            </a>
          </div>
        </div>
      </header>

      <ParallaxCover />

      <HorizontalScrollCarousel />

      <footer className="bg-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            <div>
              <h6 className="font-semibold text-gray-700 uppercase mb-2">
                Help
              </h6>
              <ul className="text-gray-600">
                <li className="mb-1">
                  <a href="/contact" className="hover:underline">
                    You can call or email us.
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/faqs" className="hover:underline">
                    FAQ&apos;s
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/product-care" className="hover:underline">
                    Product Care
                  </a>
                </li>
                <li className="mb-1">
                  <a href="/stores" className="hover:underline">
                    Stores
                  </a>
                </li>
              </ul>
            </div>
            {/* Add more footer columns here */}
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-4 text-gray-600 text-sm">
            <div className="mb-4 md:mb-0">
              <a href="#" className="hover:underline">
                English (INTL)
              </a>
            </div>
            <div className="text-center mb-4 md:mb-0">
              <span className="font-semibold text-lg">LOUIS VUITTON</span>
            </div>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
              <a href="/sitemap" className="hover:underline">
                Sitemap
              </a>
              <a href="/legal" className="hover:underline">
                Legal & Privacy
              </a>
              <a href="/cookies" className="hover:underline">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

type CardType = {
  url: string;
  title: string;
  id: number;
};

const cards: CardType[] = [
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/looks/MEN_SHOW_SS24_RUNWAYPRESS1600x2000-01.jpg?imwidth=2400",
    title: "Nano Christopher",
    id: 1,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/grid/230620_LV_MEN_SHOW_KEY_LOOK_06_0015_MENS_SS24_SHOW_KEY_LOOKS_GROUPSHOT_LVCOM_DI3_2048x1152_8.jpg?imwidth=2400",
    title: "Men's Ensemble",
    id: 2,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/looks/MEN_SHOW_SS24_RUNWAYPRESS1600x2000-02.jpg?imwidth=2400",
    title: "Luxury Leather Bags",
    id: 3,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/grid/230620_LV_MEN_SHOW_KEY_LOOK_04_0019_MENS_SS24_SHOW_KEY_LOOKS_GROUPSHOT_LVCOM_DI3_2048x1152_4.jpg?imwidth=2400",
    title: "Urban Chic",
    id: 4,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/looks/MEN_SHOW_SS24_RUNWAYPRESS1600x2000-03.jpg?imwidth=2400",
    title: "Casual Street Style",
    id: 5,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/grid/230620_LV_MEN_SHOW_KEY_LOOK_08_0002_MENS_SS24_SHOW_KEY_LOOKS_GROUPSHOT_LVCOM_DI3_2048x1152_1.jpg?imwidth=2400",
    title: "LV Embroidered",
    id: 6,
  },
  {
    url: "https://eu.louisvuitton.com/content/dam/lv/online/high-end/wolv/fashion-shows/M_Fa_Show_Mens_SS24.html/jcr:content/assets/looks/MEN_SHOW_SS24_RUNWAYPRESS1600x2000-04.jpg?imwidth=2400",
    title: "SS24 Men's Fashion",
    id: 7,
  },
  {
    url: "https://www.louisvuitton.com/images/is/image/lv/MEN_BC_LG_Bags_03_038_Avr24_DI3.jpg?wid=2400",
    title: "LV Patterned Suit",
    id: 8,
  },
  {
    url: "https://www.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton--BC_MEN_PRECOFW24_SPRING_IMG09_LVCOM_1600x2000_DII.jpg?wid=2400",
    title: "Pre-Collection ",
    id: 9,
  },
];

export default Example;
