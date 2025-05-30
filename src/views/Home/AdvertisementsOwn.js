import { buttonCustom, title } from "../../libs/tvs";

import { Link } from "@nextui-org/react";

import ImageCustom from "../../components/ImageCustom";

import { GiBallPyramid, GiFishingHook, GiVibratingBall } from "react-icons/gi";
import { PiMagnet } from "react-icons/pi";
import { TbWallpaper } from "react-icons/tb";
import { FaRibbon } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";
import { LuCable } from "react-icons/lu";

const contextImg = require.context("../../assets/home/AdvertisementsOwn", true);

export const items = [
  {
    src: "de_arrastre",
    href: "categorie=imanes&subcategorie=arrastre",
    title: "Imán de Arrastre",
    text: "O imán de pesca. Tiene un cáncamo cerrado que permite su sujeción y posterior tracción",
    icon: GiFishingHook,
  },
  {
    src: "iman-ceramico-60",
    href: "categorie=imanes&subcategorie=ferrita",
    title: "Imán de ferrita",
    text: "Tienen alta resistencia a la temperatura y corrosión, esto le permiten ser usados en exteriores y hornos",
    icon: PiMagnet,
  },
  {
    src: "tira_flexible-13",
    href: "categorie=imanes&subcategorie=otros&text=tira",
    title: "Imán en tira",
    text: "Usado frecuentemente para hacer mosquiteros y manualidades",
    icon: FaRibbon,
  },
  {
    src: "plancha-31",
    href: "categorie=imanes&subcategorie=otros&text=plancha",
    title: "Imán en plancha",
    text: "Puede pegarse para hacer souvenirs, calendarios, imanes publicitarios, etc",
    icon: TbWallpaper,
  },
  {
    src: "kluster",
    href: "text=kluster",
    title: "kluster",
    text: "Juego de 20 piedras ovaladas de hematita magnetizadas y pulidas",
    icon: GiVibratingBall,
  },
  {
    src: "neocube-dorado",
    href: "text=neocube%dorado",
    title: "neocube",
    text: "216 imanes esféricos de 5mm de diámetro",
    icon: GiBallPyramid,
  },
  {
    src: "electricidad",
    href: "categorie=electricidad",
    title: "Accesorios Eléctricos",
    text: "Facilitan la instalación y conexión de cables",
    icon: LuCable,
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
          <ImageCustom
            src={contextImg(`./${item.src}.webp`)}
            alt={item.title}
          />

          <item.icon
            className={`absolute h-full w-fit z-0 text-custom2/20 dark:text-custom1-5/20 self-center ${
              i % 2 === 0 ? "sm:right-0" : "sm:left-0 2xl:left-auto 2xl:right-0"
            }`}
          />

          <div
            className={`relative flex flex-col gap-4 xs:items-center sm:items-start max-w-96 2xl:max-w-80 ${
              i % 2 === 0 ? "" : "sm:text-end 2xl:text-start"
            }`}
          >
            <h2
              className={`${title({
                color: "custom2",
                size: "md",
                shadow: "md",
                darkColor: "custom1",
              })} ${i % 2 === 0 ? "" : "sm:self-end 2xl:self-start"}`}
            >
              {item.title}
            </h2>

            <p className="font-semibold max-sm:text-center">{item.text}.</p>

            <Link
              href={`#search?${item?.href}`}
              className={`drop-shadow-custom ${buttonCustom({
                color: "custom2",
                darkColor: "custom1",
                skew: true,
                variant: "degree",
                size: "lg",
              })} ${
                i % 2 === 0 ? "" : "sm:self-end 2xl:self-start"
              } font-bold text-white`}
            >
              <span className="skew-x-12">Ver mas</span>
              <FaArrowCircleRight size={22} />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
}

export default AdvertisementsOwn;
