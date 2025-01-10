import { motion } from "framer-motion";

import { Link, Tooltip } from "@nextui-org/react";

import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaRegFilePdf,
} from "react-icons/fa";
import {
  SiGoogleforms,
  SiGooglestreetview,
  SiMercadopago,
} from "react-icons/si";
import { FaSignalMessenger } from "react-icons/fa6";

import links from "../assets/links.json";

function Redes({ classNames, className, slice }) {
  const redes = [
    {
      id: "facebook",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      id: "googlemaps",
      icon: <SiGooglestreetview />,
      label: "Ubicación",
    },
    {
      id: "telegram",
      icon: <FaTelegramPlane />,
      label: "Telegram",
    },
    {
      id: "signal",
      icon: <FaSignalMessenger />,
      label: "Signal",
    },
    {
      id: "catalogo",
      icon: <FaRegFilePdf />,
      label: "Catalogo",
    },
    {
      id: "mercadoshops",
      icon: <SiMercadopago />,
      label: "Tienda Online",
    },
    {
      id: "form_encuesta-20250109",
      icon: <SiGoogleforms />,
      label: "Encuesta",
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
            delayChildren: 0.1,
            staggerChildren: 0.1,
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
          <Tooltip
            content={item?.label}
            className="border-2 border-custom1-5"
            classNames={{
              content: "dark:text-white text-center font-semibold",
            }}
            hidden={!item?.label}
          >
            <Link
              href={links?.[item?.id] || "#contacto"}
              target={links?.[item?.id] ? "_blank" : "_self"}
              className={`bg-neutral-200/20 rounded-full text-white p-2 cursor-pointer transition-all shadow-md hover:bg-custom1 hover:text-custom2  ${
                classNames?.link || ""
              }`}
              aria-label={item?.label}
            >
              {item.icon}
            </Link>
          </Tooltip>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Redes;
