import { motion } from "framer-motion";

import { Button } from "@nextui-org/react";

import { subtitle, title, title1 } from "../../libs/tvs";

import { GiMagnetBlast } from "react-icons/gi";
import { IoMagnetOutline } from "react-icons/io5";
import { PiMagnet } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { FaBarsStaggered, FaArrowDown } from "react-icons/fa6";

const class_icons_main =
  "absolute w-12 xs:w-14 sm:w-20 lg:w-28 h-auto transition-all text-custom1/90";

const icons = [
  <IoMagnetOutline
    className={`top-0 left-6 sm:left-12 -rotate-[110deg] ${class_icons_main}`}
  />,
  <PiMagnet
    className={`bottom-0 right-0 sm:right-10 rotate-[70deg] ${class_icons_main}`}
  />,
  <SlEnergy
    className={`top-0 sm:top-8 right-0 sm:right-16 rotate-[10deg] ${class_icons_main}`}
  />,
  <FaBarsStaggered
    className={`bottom-0 left-2 sm:left-16 ${class_icons_main}`}
  />,
];

export default function Hero() {
  const contextImg = require.context("../../assets/home/Hero", true);

  return (
    <section
      className="w-screen relative right-2 xs:right-4 sm:right-10 lg:right-12 bg-gradient-to-t from-custom2 to-custom2-10 overflow-hidden shadow-md min-[2000px]:h-[1200px] mt-16 mb-10 pt-2"
      style={{
        height: "calc(100vh - 4rem)",
      }}
    >
      <div className="relative flex flex-col gap-4 items-center w-full h-full max-w-7xl place-self-center">
        <GiMagnetBlast className="absolute inset-0 w-fit h-[105%] lg:h-[110%] opacity-30 text-custom1 place-self-center" />

        <article className="relative w-full flex flex-grow items-center justify-center">
          {icons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}

          <span
            className="w-1/3 h-3/5 md:w-1/5 md:h-3/4 xl:text-danger rounded-lg -skew-x-6 -skew-y-12 absolute shadow-large from-custom1 to-custom1-2 transition-all"
            style={{
              background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
            }}
          />

          {Array.from({ length: 5 }).map((_, i) => (
            <motion.img
              key={i}
              loading="eager"
              src={contextImg(`./360/${i + 1}.webp`)}
              srcSet={`
                ${contextImg(`./360/${i + 1}.webp`)} 360w,
                ${contextImg(`./640/${i + 1}.webp`)} 640w,
                ${contextImg(`./768/${i + 1}.webp`)} 768w,
                ${contextImg(`./1024/${i + 1}.webp`)} 1024w,
                ${contextImg(`./1280/${i + 1}.webp`)} 1280w,
              `}
              alt={`Iman de neodimio ${i + 1}`}
              className={`hidden sm:block object-contain h-full absolute inset-0 mx-auto pb-2 sm:pb-4 drop-shadow-custom z-${
                i * 10
              }`}
              whileInView={{ y: [0, (i + 1) * 6, 0] }}
              transition={{
                duration: i + 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          ))}

          {Array.from({ length: 5 }).map((_, i) => (
            <img
              key={i}
              loading="eager"
              src={contextImg(`./360/${i + 1}.webp`)}
              srcSet={`
                ${contextImg(`./360/${i + 1}.webp`)} 360w,
                ${contextImg(`./640/${i + 1}.webp`)} 640w,
                ${contextImg(`./768/${i + 1}.webp`)} 768w,
                ${contextImg(`./1024/${i + 1}.webp`)} 1024w,
                ${contextImg(`./1280/${i + 1}.webp`)} 1280w,
              `}
              alt={`Iman de neodimio ${i + 1}`}
              className="sm:hidden object-contain h-full absolute inset-0 mx-auto pb-2 sm:pb-4 drop-shadow-custom"
            />
          ))}
        </article>

        <article className="relative z-10 flex flex-col items-center justify-center gap-2 sm:gap-4 h-fit px-4 pb-8">
          <div className="text-center max-w-[900px]">
            <h1 className={title({ size: "md", color: "custom1" })}>
              Imanes tucuman
            </h1>
            <h2 className={title1({ size: "sm" }) + " text-white"}>
              Un{" "}
              <span className={title1({ color: "yellow" })}>
                emprendimiento
              </span>{" "}
              dedicado a la comercialización de imanes de{" "}
              <span className={title1({ color: "yellow" })}>neodimio</span>.
            </h2>
            <h3 className={subtitle()}>Atencion, calidad y precio.</h3>
          </div>

          <Button
            radius="full"
            variant="bordered"
            size="lg"
            className="text-custom1 border-custom1 hover:bg-custom1 hover:text-white font-bold"
            onPress={() => {
              const section = document.querySelector("#formas");
              if (section) section.scrollIntoView();
            }}
          >
            Explorar
            <FaArrowDown />
          </Button>
        </article>
      </div>
    </section>
  );
}
