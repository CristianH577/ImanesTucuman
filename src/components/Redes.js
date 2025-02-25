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

import { links } from "../consts/consts";

function Redes({ classNames, className, slice, variants }) {
  // const contextImgs = require.context("../assets/redes/", true);

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
          variants={
            variants || {
              hidden: {
                opacity: 0,
                scale: 1.5,
              },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }
          }
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
              className={`bg-neutral-200/20 rounded-full text-white p-2 cursor-pointer transition-all shadow-md hover:bg-custom1 hover:text-custom2 ${
                classNames?.link || ""
              }`}
              aria-label={item?.label}
            >
              {item?.icon}
              {/* {showImgs && item?.src ? (
                <img
                  src={item?.src}
                  alt={`Logo de ${item?.id}`}
                  className="object-contain"
                  style={{
                    width: 36,
                    height: 36,
                  }}
                />
              ) : (
                item?.icon
              )} */}
            </Link>
          </Tooltip>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default Redes;
