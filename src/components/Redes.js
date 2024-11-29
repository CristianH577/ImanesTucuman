import { motion } from "framer-motion";

import { Link } from "@nextui-org/react";
import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaRegFilePdf,
} from "react-icons/fa";
import { SiGooglestreetview, SiMercadopago } from "react-icons/si";
import { FaSignalMessenger } from "react-icons/fa6";

import links from "../assets/links.json";

function Redes({ classNames, className, slice }) {
  const redes = [
    {
      id: "facebook",
      icon: <FaFacebook />,
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      id: "googlemaps",
      icon: <SiGooglestreetview />,
    },
    {
      id: "telegram",
      icon: <FaTelegramPlane />,
    },
    {
      id: "signal",
      icon: <FaSignalMessenger />,
    },
    {
      id: "catalogo",
      icon: <FaRegFilePdf />,
    },
    {
      id: "mercadoshops",
      icon: <SiMercadopago />,
    },
  ];
  return (
    <motion.div
      className={`flex gap-2 justify-center items-center ${className || ""}`}
      variants={{
        hidden: {
          scale: 0,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delayChildren: 0.2,
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {redes.slice(0, slice || redes.length).map((item, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: {
              opacity: 0,
              scale: 1.5,
            },
            visible: {
              opacity: 1,
              scale: 1,
            },
          }}
          whileTap={{
            rotate: 360,
          }}
        >
          <Link
            href={links?.[item?.id] || "#"}
            target={links?.[item?.id] ? "_blank" : "_self"}
            className={`bg-neutral-200/20 rounded-full text-white p-2 cursor-pointer transition-all shadow-md hover:bg-custom1 hover:text-custom2  ${
              classNames?.link || ""
            }`}
          >
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Redes;
