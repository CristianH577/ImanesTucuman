import { buttonCustom, title, title1 } from "../../libs/tvs";

import { Image, Link } from "@nextui-org/react";

import { GiBallPyramid, GiFishingHook, GiVibratingBall } from "react-icons/gi";
import { PiMagnet } from "react-icons/pi";
import { TbWallpaper } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";

const contextImg = require.context("../../assets/home/AdvertisementsOwn", true);

export const items = [
  {
    image: {
      href: "imanes",
      src: "de_arrastre",
    },
    title: "Imán de Arrastre",
    text: "O imán de pesca. Tiene un cáncamo cerrado que permite su sujeción y posterior tracción",
    icon: GiFishingHook,
  },
  {
    image: {
      href: "otros",
      src: "iman-ceramico-60",
    },
    title: "Imán cerámico",
    text: "Tienen alta resistencia a la temperatura y corrosión, esto le permiten ser usados en exteriores y hornos",
    icon: PiMagnet,
  },
  {
    image: {
      href: "otros",
      src: "tira_flexible-13",
    },
    title: "Imán en tira",
    text: "Usado frecuentemente para hacer mosquiteros y manualidades",
    icon: FaRibbon,
  },
  {
    image: {
      href: "otros",
      src: "plancha-31",
    },
    title: "Imán en plancha",
    text: "Puede pegarse para hacer souvenirs, calendarios, imanes publicitarios, etc",
    icon: TbWallpaper,
  },
  {
    image: {
      href: "otros",
      src: "kluster",
    },
    title: "kluster",
    text: "Juego de 20 piedras ovaladas de hematita magnetizadas y pulidas",
    icon: GiVibratingBall,
  },
  {
    image: {
      href: "otros",
      src: "neocube-dorado",
    },
    title: "neocube",
    text: "216 imanes esféricos de 5mm de diámetro",
    icon: GiBallPyramid,
  },
];

export function AdvertisementsOwn() {
  return (
    <section className="grid grid-cols-1 2xl:grid-cols-2">
      {items.map((item, i) => (
        <article
          key={i}
          className={`relative flex flex-col items-center gap-8 p-8 place-self-center ${
            i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse 2xl:flex-row"
          }`}
        >
          <Image
            src={contextImg(`./${item.image?.src}.webp`)}
            loading="lazy"
            alt={item.title}
            className="drop-shadow-custom"
            // classNames={{ wrapper: "w-full" }}
          />

          <item.icon
            className={`absolute h-full w-fit z-0 text-custom2/20 dark:text-custom1-5/20 self-center ${
              i % 2 === 0 ? "sm:right-0" : "sm:left-0 2xl:left-auto 2xl:right-0"
            }`}
          />

          <div
            className={`relative py-4 flex flex-col xs:items-center sm:items-start gap-4 max-w-96 2xl:max-w-80 ${
              i % 2 === 0 ? "" : "sm:text-end 2xl:text-start"
            }`}
          >
            <h1
              className={`${title({ size: "md" })} ${
                i % 2 === 0 ? "" : "sm:self-end 2xl:self-start"
              }`}
            >
              {item.title}
            </h1>
            <p className={`${title1()} max-sm:text-center`}>{item.text}.</p>

            <Link
              href={`#${item?.image?.href}`}
              className={`${buttonCustom({
                color: "custom1",
                skew: true,
                variant: "degree",
                shadow: "md",
                size: "lg",
              })} ${
                i % 2 === 0 ? "" : "sm:self-end 2xl:self-start"
              } font-bold text-white`}
            >
              <span className="skew-x-12">Ver mas</span>
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

export default AdvertisementsOwn;
