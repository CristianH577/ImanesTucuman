import { motion } from "framer-motion";

import { Image } from "@nextui-org/react";

import SliderCustom from "./Banners/SliderCustom";
import BannerDefault from "./Banners/BannerDefault";

import { IoMagnetOutline, IoGiftOutline } from "react-icons/io5";
import { PiMagnet, PiShootingStar } from "react-icons/pi";
import { SlEnergy } from "react-icons/sl";
import { FaBarsStaggered } from "react-icons/fa6";

import portada from "../assets/banners/portada.webp";
import portada50 from "../assets/banners/portada-50.webp";

function Banners() {
  const contextImg = require.context("../assets", true);

  const class_icons = `absolute absolute w-[32px] xs:w-[64px] h-auto transition-all text-custom1/90 navidad:text-white`;

  const icons = [
    <IoMagnetOutline
      className={`top-0 left-2 sm:left-12 -rotate-[110deg] ${class_icons}`}
    />,
    <PiMagnet
      className={`bottom-0 right-0 sm:right-10 rotate-[70deg] ${class_icons}`}
    />,
    <SlEnergy
      className={`navidad:hidden top-0 sm:top-8 right-0 sm:right-16 md:right-0 rotate-[10deg] ${class_icons}`}
    />,
    <PiShootingStar
      className={`hidden navidad:block top-0 sm:top-8 right-0 sm:right-16 md:right-0 rotate-[10deg] ${class_icons}`}
    />,
    <FaBarsStaggered
      className={`navidad:hidden bottom-0 left-6 sm:left-16 md:left-6 ${class_icons} `}
    />,
    <IoGiftOutline
      className={`hidden navidad:block bottom-0 left-6 sm:left-16 md:left-6 ${class_icons} `}
    />,
  ];

  const items = [
    <BannerDefault
      image={
        <div className="relative flex items-center justify-center h-full">
          {icons.map((icon, i) => (
            <span key={i}>{icon}</span>
          ))}

          <span
            className="w-[30%] h-[90%] rounded-lg -skew-x-6 -skew-y-12 absolute shadow-large from-custom1 to-custom1-2"
            style={{
              background: `linear-gradient(45deg, var(--tw-gradient-stops))`,
            }}
          />

          <Image
            // src={contextImg(`./banners/portada.webp`)}
            src={portada}
            removeWrapper
            loading="eager"
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
        </div>
      }
      title={"IMANES TUCUMÁN"}
      text={
        "Es un emprendimiento dedicado a la comercialización de imanes de neodimio y otros productos"
      }
    />,

    <BannerDefault
      image={
        <motion.a
          className="z-10"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          href="#otros"
        >
          <Image
            src={contextImg(`./otros/imanes/iman-ceramico-60.webp`)}
            loading="lazy"
            removeWrapper
            className="object-contain "
            alt="Imán cerámico para horno"
          />
        </motion.a>
      }
      title={"Imán cerámico"}
      text={
        "Su alta resistencia a la temperatura y a la corrosión le permiten ser usados en hornos"
      }
    />,

    <BannerDefault
      image={
        <motion.a
          className="z-10"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          href="#otros"
        >
          <Image
            src={contextImg(`./otros/imanes/kluster.webp`)}
            loading="lazy"
            removeWrapper
            className="object-contain "
            alt="Imanes ovalados + cuerda"
          />
        </motion.a>
      }
      title={"kluster"}
      text={
        "Juego de 20 piedras de hematita magnetizadas y pulidas + cuerda de polipropileno"
      }
    />,

    <BannerDefault
      image={
        <motion.a
          className="z-10"
          variants={{
            hidden: { scale: 0, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          href="#otros"
        >
          <Image
            src={contextImg(`./otros/imanes/neocube-dorado.webp`)}
            loading="lazy"
            removeWrapper
            className="object-contain "
            alt="Cubo de imanes esfericos dorados"
          />
        </motion.a>
      }
      // image={
      //   <motion.a
      //     className="z-10 relative w-full h-full flex items-center justify-center "
      //     variants={{
      //       hidden: { scale: 0, opacity: 0 },
      //       visible: {
      //         scale: 1,
      //         opacity: 1,
      //       },
      //     }}
      //     href="#otros"
      //     style={{
      //       filter: "drop-shadow(2px 4px 6px black)",
      //     }}
      //   >
      //     <motion.span
      //       className="h-full w-full"
      //       initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0% 100%)" }}
      //       whileHover={{
      //         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //         zIndex: 20,
      //         scale: 1.1,
      //       }}
      //     >
      //       <Image
      //         src={contextImg(`./otros/imanes/neocube-dorado.webp`)}
      //         removeWrapper
      //         className="object-contain h-full"
      //         alt="Cubo de imanes esfericos dorados"
      //       />
      //     </motion.span>

      //     <motion.span
      //       className="h-[95%] w-[95%] absolute bg-gradient-to-tr from-custom1 to-custom1-4 rounded-2xl z-10"
      //       style={{ clipPath: "polygon(100% 2%, 98% 0, 0 98%, 2% 100%)" }}
      //     />

      //     <motion.span
      //       className="absolute h-full right-[8px]"
      //       initial={{
      //         clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0% 100%)",
      //         scale: 1.05,
      //       }}
      //       whileHover={{
      //         clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      //         zIndex: 20,
      //         scale: 1.15,
      //       }}
      //     >
      //       <Image
      //         src={contextImg(`./otros/imanes/neocube.webp`)}
      //         removeWrapper
      //         className="object-contain h-full"
      //         alt="Cubo de imanes esfericos multicolor"
      //       />
      //     </motion.span>
      //   </motion.a>
      // }
      title={"neocube"}
      text={"216 imanes esféricos de 5mm de diámetro"}
    />,
  ];

  return <SliderCustom id="inicio" items={items} className="min-h-[500px]" />;
}

export default Banners;
