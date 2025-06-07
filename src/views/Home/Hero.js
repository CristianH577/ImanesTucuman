import { motion } from "framer-motion";

import { Button } from "@nextui-org/react";

import { title, title1 } from "../../libs/tvs";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";

import {
  SVGMagnet,
  SVGMagnet2,
  SVGBarsStaggered,
  SVGMagnetBlast,
} from "../../assets/layout/svgs";

const class_icons_main =
  "absolute w-12 xs:w-14 sm:w-20 lg:w-28 h-auto transition-all text-custom1/90";

const icons = [
  <SVGMagnet2
    className={`top-0 left-6 sm:left-12 -rotate-[100deg] ${class_icons_main}`}
  />,
  <SVGMagnet
    className={`bottom-0 right-0 sm:right-10 rotate-[80deg] ${class_icons_main}`}
  />,
  <ElectricBoltIcon
    className={`top-0 sm:top-8 right-0 sm:right-16 rotate-[10deg] ${class_icons_main}`}
  />,
  <SVGBarsStaggered
    className={`bottom-0 left-2 sm:left-16 ${class_icons_main}`}
  />,
];

export default function Hero() {
  const contextImg = require.context("../../assets/home/Hero", true);

  return (
    <section
      className="w-screen relative right-2 xs:right-4 sm:right-10 lg:right-12 overflow-hidden shadow-md min-[2000px]:h-[1200px] mt-16 pt-2 bg-radial from-custom2-10 to-custom2"
      style={{
        height: "calc(100dvh - 4rem)",
      }}
    >
      <div className="relative flex flex-col gap-4 items-center w-full h-full max-w-7xl place-self-center">
        <SVGMagnetBlast className="absolute inset-0 w-fit h-[105%] lg:h-[110%] opacity-30 text-custom1 place-self-center" />

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
              loading="lazy"
              width={"100%"}
              height={"100%"}
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
              loading="lazy"
              width={"100%"}
              height={"100%"}
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
            <h1 className={title({ size: "md", shadow: "custom" })}>
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
            <h3 className="my-2 text-lg lg:text-xl text-default-400 dark:text-default-600">
              Atencion, calidad y precio.
            </h3>
          </div>

          <Button
            radius="full"
            variant="bordered"
            size="lg"
            className="text-custom1 border-custom1 hover:bg-custom1 hover:text-custom2 font-bold"
            title="Ver sección de formas"
            onPress={() => {
              const section = document.querySelector("#formas");
              if (section) section.scrollIntoView();
            }}
          >
            Explorar
            <ArrowDownwardIcon />
          </Button>
        </article>
      </div>
    </section>
  );
}
