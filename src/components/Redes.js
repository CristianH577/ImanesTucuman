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
import { FaSignalMessenger, FaXTwitter } from "react-icons/fa6";

import { links } from "../consts/siteConfig";

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
      className={`flex gap-2 justify-center items-center flex-wrap ${
        className || ""
      }`}
      // variants={{
      //   hidden: {
      //     scale: 0,
      //     opacity: 0,
      //   },
      //   visible: {
      //     scale: 1,
      //     opacity: 1,
      //     transition: {
      //       delayChildren: 0.1,
      //       staggerChildren: 0.1,
      //     },
      //   },
      // }}
      // initial="hidden"
      // whileInView="visible"
      // viewport={{ once: true }}
    >
      {redes.slice(0, slice || redes.length).map((item, i) => (
        <motion.div
          key={i}
          // variants={
          //   variants || {
          //     hidden: {
          //       opacity: 0,
          //       scale: 1.5,
          //     },
          //     visible: {
          //       opacity: 1,
          //       scale: 1,
          //     },
          //   }
          // }
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
              className={`text-neutral-500 transition-all hover:text-custom1 ${
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
    </div>
  );
}

export default Redes;
