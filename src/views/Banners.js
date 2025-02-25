import { handleLink } from "../libs/functions";

import { Image } from "@nextui-org/react";

import SliderCustom from "./Banners/SliderCustom";

import { IoMagnetOutline, IoGiftOutline } from "react-icons/io5";
import { PiMagnet, PiShootingStar } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaMagnet } from "react-icons/fa";
import {
  GiBallPyramid,
  GiFishingHook,
  GiMagnetBlast,
  GiVibratingBall,
} from "react-icons/gi";

import portada from "../assets/banners/portada.webp";
import portada50 from "../assets/banners/portada-50.webp";

const class_icons_main =
  "absolute absolute w-[32px] xs:w-[64px] h-auto transition-all text-custom1/90 navidad:text-white";
const class_icons = "w-[inherit] h-[inherit] opacity-30";

const icons = [
  <IoMagnetOutline
    className={`top-0 left-2 sm:left-12 -rotate-[110deg] ${class_icons_main}`}
  />,
  <PiMagnet
    className={`bottom-0 right-0 sm:right-10 rotate-[70deg] ${class_icons_main}`}
  />,
  <SlEnergy
    className={`navidad:hidden top-0 sm:top-8 right-0 sm:right-16 md:right-0 rotate-[10deg] ${class_icons_main}`}
  />,
  <PiShootingStar
    className={`hidden navidad:block top-0 sm:top-8 right-0 sm:right-16 md:right-0 rotate-[10deg] ${class_icons_main}`}
  />,
  <FaBarsStaggered
    className={`navidad:hidden bottom-0 left-6 sm:left-16 md:left-6 ${class_icons_main} `}
  />,
  <IoGiftOutline
    className={`hidden navidad:block bottom-0 left-6 sm:left-16 md:left-6 ${class_icons_main} `}
  />,
];

const contextImg = require.context("../assets", true);

export const items = [
  {
    content: (
      <a
        href="#imanes"
        onClick={() => handleLink("imanes")}
        className="relative flex items-center justify-center h-full w-full"
      >
        {icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}

        <span
          className="w-[30%] h-[90%] rounded-lg -skew-x-6 -skew-y-12 absolute shadow-large from-custom1 to-custom1-2"
          style={{
            background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
          }}
        />

        {/* <span className="w-full h-full min-w-[320px] min-h-[320px] bg-danger" /> */}

        <Image
          // src={contextImg(`./banners/portada.webp`)}
          src={portada}
          removeWrapper
          loading="eager"
          width={373}
          height={320}
          className="object-contain"
          alt="Varios tipos de imanes"
          // srcSet={`
          //   ${contextImg(`./banners/portada-50.webp`)} 373w,
          //   ${contextImg(`./banners/portada.webp`)} 540w,
          // `}
          srcSet={`
        ${portada50} 373w,
        ${portada} 540w,
      `}
          sizes="(max-width: 360px) 360px, 600px,"
        />
      </a>
    ),
    title: "IMANES TUCUMÁN",
    text: "Es un emprendimiento dedicado a la comercialización de imanes de neodimio y otros productos",
    icon: <GiMagnetBlast className={class_icons + " text-custom1"} />,
  },
  {
    image: {
      href: "imanes",
      data: {
        src: contextImg(`./formas/de_arrastre.webp`),
        width: 367,
        height: 320,
        alt: "Imán de arrastre",
      },
    },
    title: "Imán de Arrastre",
    text: "O imán de pesca. Tiene un cáncamo cerrado que permite su sujeción y posterior tracción",
    icon: <GiFishingHook className={class_icons + " text-cyan-500"} />,
  },
  {
    image: {
      href: "otros",
      data: {
        src: contextImg(`./otros/imanes/iman-ceramico-60.webp`),
        width: 452,
        height: 320,
      },
    },
    title: "Imán cerámico",
    text: "Tienen alta resistencia a la temperatura y corrosión, esto le permiten ser usados en exteriores y hornos",
    icon: <FaMagnet className={class_icons + " text-black -rotate-45"} />,
  },
  {
    image: {
      href: "otros",
      data: {
        src: contextImg(`./otros/imanes/kluster.webp`),
        width: 617,
        height: 320,
      },
    },
    title: "kluster",
    text: "Juego de 20 piedras ovaladas de hematita magnetizadas y pulidas",
    icon: <GiVibratingBall className={class_icons} />,
  },
  {
    image: {
      href: "otros",
      data: {
        src: contextImg(`./otros/imanes/neocube-dorado.webp`),
        width: 357,
        height: 320,
      },
    },
    title: "neocube",
    text: "216 imanes esféricos de 5mm de diámetro",
    icon: <GiBallPyramid className={class_icons + " text-[gold] rotate-12"} />,
  },
];

export default function Banners() {
  return (
    <SliderCustom
      id="inicio"
      items={items}
      className="min-h-[600px] xs:min-h-[700px] sm:min-h-[500px]"
    />
  );
}
