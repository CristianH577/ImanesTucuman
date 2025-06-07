import { LINKS_SITES } from "../consts/siteConfig";

import { Link, Tooltip } from "@nextui-org/react";

import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import PinDropIcon from "@mui/icons-material/PinDrop";
import DescriptionIcon from "@mui/icons-material/Description";

import { SVGMercadoLibre, SVGSSignalMessenger } from "../assets/layout/svgs";

export default function Redes({ classNames = {}, className = "", slice = 0 }) {
  const redes = [
    {
      id: "facebook",
      icon: FacebookIcon,
      label: "Facebook",
    },
    {
      id: "instagram",
      icon: InstagramIcon,
      label: "Instagram",
    },
    {
      id: "x",
      icon: XIcon,
      label: "X",
    },
    {
      id: "googlemaps",
      icon: PinDropIcon,
      label: "Ubicación",
    },
    {
      id: "telegram",
      icon: TelegramIcon,
      // className="text-[#0088cc]"
      label: "Telegram",
    },
    {
      id: "signal",
      icon: SVGSSignalMessenger,
      label: "Signal",
    },
    {
      id: "catalogo",
      icon: PictureAsPdfIcon,
      label: "Catalogo",
    },
    {
      id: "mercadoshops",
      icon: SVGMercadoLibre,
      label: "Tienda Online",
      classNames: {
        icon: "h-full w-fit",
      },
    },
    {
      id: "form_encuesta-20250109",
      icon: DescriptionIcon,
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
        <Tooltip
          key={i}
          content={item?.label}
          className="border-2 border-custom1-2"
          classNames={{
            content: "dark:text-white text-center font-semibold",
          }}
          hidden={!item?.label}
        >
          <Link
            href={LINKS_SITES?.[item?.id] || "#contacto"}
            // target={LINKS_SITES?.[item?.id] ? "_blank" : "_self"}
            className={`text-neutral-400 transition-all hover:text-custom2 dark:hover:text-custom1${
              classNames?.link ? " " + classNames?.link : ""
            }`}
            aria-label={item?.label}
            isExternal
          >
            <item.icon
              className={"" + (classNames?.icon ? " " + classNames?.icon : "")}
            />
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}
