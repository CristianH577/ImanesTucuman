import { motion } from "framer-motion";

import { LINKS_SITES } from "../consts/siteConfig";

import { Link, Tooltip } from "@nextui-org/react";

import {
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaRegFilePdf,
} from "react-icons/fa";
import { FaSignalMessenger, FaXTwitter } from "react-icons/fa6";
import {
  SiGoogleforms,
  SiGooglestreetview,
  SiMercadopago,
} from "react-icons/si";

export default function Redes({ classNames = {}, className = "", slice = 0 }) {
  const redes = [
    {
      id: "facebook",
      icon: <FaFacebook />,
      label: "Facebook",
    },
    {
      id: "instagram",
      icon: <FaInstagram />,
      // src: contextImgs("./logo-insta.webp"),
      label: "Instagram",
    },
    {
      id: "x",
      icon: <FaXTwitter />,
      label: "X",
    },
    {
      id: "googlemaps",
      icon: <SiGooglestreetview />,
      // src: contextImgs("./logo-googlemaps.webp"),
      label: "Ubicación",
    },
    {
      id: "telegram",
      icon: <FaTelegramPlane />,
      // className="text-[#0088cc]"
      label: "Telegram",
    },
    {
      id: "signal",
      icon: <FaSignalMessenger />,
      // className="text-sky-500"
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
      // src: contextImgs("./logo-ms.webp"),
      label: "Tienda Online",
    },
    {
      id: "form_encuesta-20250109",
      icon: <SiGoogleforms />,
      // className="text-purple-500"
      label: "Encuesta",
    },
  ];

  return (
    <div
      className={`flex gap-2 justify-center items-center flex-wrap${
        className ? " " + className : ""
      }`}
    >
      {redes.slice(0, slice || redes.length).map((item, i) => (
        <motion.div
          key={i}
          whileTap={{
            rotate: 360,
          }}
        >
          <Tooltip
            content={item?.label}
            className="border-2 border-custom1-2"
            classNames={{
              content: "dark:text-white text-center font-semibold",
            }}
            hidden={!item?.label}
          >
            <Link
              href={LINKS_SITES?.[item?.id] || "#contacto"}
              target={LINKS_SITES?.[item?.id] ? "_blank" : "_self"}
              className={`text-neutral-400 transition-all hover:text-custom2 dark:hover:text-custom1${
                classNames?.link ? " " + classNames?.link : ""
              }`}
              aria-label={item?.label}
            >
              {item?.icon}
            </Link>
          </Tooltip>
        </motion.div>
      ))}
    </div>
  );
}
