import { motion } from "framer-motion";

import { Image } from "@nextui-org/react";

import { IoMagnetOutline } from "react-icons/io5";
import { PiMagnet } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";

function Banner({ esthetic }) {
  const contextImg = require.context("../assets/banner", true);

  const class_icons = `absolute absolute w-[32px] xs:w-[64px] h-auto transition-all text-custom1/90`;
  // ${esthetic.includes("navidad") ? "text-white" : "text-custom1/90"}

  const icons = [
    <IoMagnetOutline
      className={`top-0 left-2 sm:left-12 -rotate-[110deg] ${class_icons}`}
    />,
    <PiMagnet
      className={`bottom-0 right-0 sm:right-10 rotate-[70deg] ${class_icons}`}
    />,
    <SlEnergy
      className={`top-0 sm:top-8 right-0 sm:right-16 md:right-0 rotate-[10deg] ${class_icons}`}
    />,
    <FaBarsStaggered
      className={`bottom-0 left-6 sm:left-16 md:left-6 ${class_icons} w-[42px]`}
    />,
  ];

  return (
    <motion.section
      className="w-full bg-radial from-custom2-10 to-custom2 text-white flex justify-center pb-16 pt-24 px-2 sm:px-4 relative "
      initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0% 100%)" }}
      animate={{
        clipPath: [
          "polygon(0 0, 0 0, 0 0, 0% 100%)",
          "polygon(0 0, 100% 0, 100% 0, 0% 100%)",
          "polygon(0 0, 100% 0%, 100% 90%, 0% 100%)",
        ],
        transition: {
          delayChildren: 0.1,
          staggerChildren: 0.2,
        },
      }}
      transition={{ duration: 1 }}
    >
      <article className="grid grid-cols-1 gap-6 md:grid-cols-2 text-center md:flex-row max-w-[1200px] items-center">
        <motion.div
          className="flex items-center justify-center relative"
          variants={{
            visible: {
              transition: {
                delayChildren: 0.5,
                staggerChildren: 0.5,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {icons.map((icon, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {icon}
            </motion.span>
          ))}

          <motion.span
            className="w-[30%] h-[90%] bg- rounded-lg -skew-x-6 -skew-y-12 absolute shadow-large from-custom1 to-custom1-2 "
            style={{
              background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          />

          <motion.div
            className="z-10"
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
              },
            }}
          >
            <Image
              src={contextImg(`./portada.webp`)}
              removeWrapper
              className="object-contain max-h-[320px]"
              alt="Varios tipos de imanes"
              srcSet={`
              ${contextImg(`./portada-x0,5.webp`)} 375w,
              ${contextImg(`./portada.webp`)} 750w,
            `}
              sizes="(max-width: 360px) 375px,
              (max-width: 640px) 750px,
              1500px"
              style={{
                filter: "drop-shadow(2px 4px 6px black)",
              }}
            />
          </motion.div>
        </motion.div>

        <motion.p
          className="text-lg xs:text-2xl p-2 xs:px-8 md:px-2 "
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <b className="text-custom1 uppercase navidad:text-warning ">
            IMANES TUCUMán
          </b>{" "}
          es un emprendimiento dedicado a la comercialización de imanes de
          neodimio y otros productos.
        </motion.p>
        {/* Contamos con una gran variedad de formas y medidas. */}

        {/* <motion.div
          className="text-lg xs:text-2xl p-2 xs:px-8 md:px-2 inline-flex whitespace-pre flex-wrap"
          variants={{
            visible: {
              transition: {
                delay: 0.5,
                staggerChildren: 0.1,
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {"IMANES TUCUMán".split("").map((l, i) => (
            <motion.span
              key={i}
              className="text-custom1 uppercase font-bold"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              {l}
            </motion.span>
          ))}
          {" es un emprendimiento dedicado a la comercialización de imanes de neodimio y otros productos. Contamos con una gran variedad de formas y medidas."
            .split("")
            .map((l, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                {l}
              </motion.span>
            ))}
        </motion.div> */}
      </article>

      {/* <span className="absolute bottom-0 w-full h-10 bg-gradient-to-b from-transparent to-content2 dark:to-content1" /> */}
    </motion.section>
  );
}

export default Banner;
